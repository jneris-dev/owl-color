import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import debounce from "lodash/debounce";
import tinycolor from 'tinycolor2';
import { HexColorPicker } from 'react-colorful';
import { useClickAway, useCopyToClipboard } from 'react-use';
import { MdColorize } from "react-icons/md";

const formats = [
    { id: 1, name: "hex", unavailable: false },
    { id: 2, name: "rgb", unavailable: false },
    { id: 3, name: "hsl", unavailable: false },
    { id: 4, name: "hsv", unavailable: false },
    { id: 5, name: "name", unavailable: false },
];

type Toast = {
    show: boolean,
    message: string,
}

type Format = {
    id: number,
    name: string,
    unavailable: boolean,
}

type ColorInterface = {
    reference: any;
    id: string;
    title: string;
    show: boolean;
    color: string;
    toggle: (value: boolean) => void;
    setColor: (e: string) => void;
    toast: ({ show, message }: Toast) => void;
    colorFormat: Format;
    setColorFormat: ({ id, name, unavailable }: Format) => void;
}

import styles from './styles.module.scss';

export function Input({ reference, id, title, show, toggle, color, setColor, toast, colorFormat, setColorFormat, ...props }: ColorInterface) {
    const picker = useRef(null);
    const inputOuter = useRef<HTMLDivElement>(null);

    const [clipboard, copyToClipboard] = useCopyToClipboard();
    const [editing, setEditing] = useState(false);

    useClickAway(picker, (e) => {
        if (inputOuter?.current?.contains(e.target as Node)) {
            return;
        }
        toggle(false);
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.value) {
            return;
        }

        const colorValue = tinycolor(e.target.value);

        if (!colorValue.isValid()) {
            return;
        }

        setColor(colorValue.toHexString());

        if (editing === true) {
            formats.forEach(function (format, index) {
                if (format.name === colorValue.getFormat()) {
                    setColorFormat(formats[index]);
                }
            });
        }
    }

    function formatColor() {
        const convertedString = color.toString();

        if (convertedString) {
            reference.current.value = convertedString;
        }
    }

    useEffect(() => {
        if (editing === true) {
            return;
        }

        formatColor();
    }, [colorFormat]);

    useEffect(() => {
        const pickedColor = tinycolor(color);

        if (!pickedColor.isValid()) {
            return;
        }

        setColor(pickedColor.toHexString());

        if (editing === false) {
            formatColor();
        }
    }, [color]);

    return (
        <>
            <div className={styles.wrapper} ref={inputOuter}>
                <span>{colorFormat.name}</span>
                <input
                    ref={reference}
                    id={id}
                    name={id}
                    type="text"
                    onChange={debounce((e) => handleChange(e), 300)}
                    onFocus={() => { setEditing(true); }}
                    onBlur={() => { setEditing(false); }}
                />
                <button
                    onClick={!show ? () => toggle(true) : () => toggle(false)}
                    style={{
                        backgroundColor: color,
                        color: tinycolor.mostReadable(color, ["#000", "#fff"]).toHexString(),
                    }}
                >
                    <MdColorize />
                </button>
                <AnimatePresence>
                    {show && (
                        <motion.div
                            ref={picker}
                            initial={{
                                y: 50,
                                opacity: 0,
                            }}
                            className={styles.pickerWrapper}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        >
                            <HexColorPicker
                                color={color}
                                onChange={setColor}
                                className={styles.picker}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <button
                onClick={(e) => {
                    copyToClipboard(color);
                    toast({
                        show: true,
                        message: `Successfully copied "${color}" to clipboard`,
                    });
                }}
                className={styles.copy}
            >
                Copy to clipboard
            </button>
        </>
    );
}