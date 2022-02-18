import React, { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import tinycolor from 'tinycolor2';
import { HexColorPicker } from 'react-colorful';
import { useClickAway } from 'react-use';
import { MdColorize } from "react-icons/md";

type ColorInterface = {
    show: boolean;
    color: string;
    toggle: (value: boolean) => void;
    setColor: (e: string) => void;
}

import styles from './styles.module.scss';

export function Input({ show, toggle, color, setColor, ...props }: ColorInterface) {
    const picker = useRef(null);
    const inputOuter = useRef<HTMLDivElement>(null);

    useClickAway(picker, (e) => {
        if (inputOuter?.current?.contains(e.target as Node)) {
            return;
        }

        toggle(false);
    });

    return (
        <div className={styles.wrapper} ref={inputOuter}>
            <input
                type="text"
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                }}
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
    );
}