import React from 'react';
import { MdSwapVert } from 'react-icons/md';
import tinycolor from 'tinycolor2';

import styles from './styles.module.scss';

const formats = [
    { id: 1, name: "hex", unavailable: false },
    { id: 2, name: "rgb", unavailable: false },
    { id: 3, name: "hsl", unavailable: false },
    { id: 4, name: "hsv", unavailable: false },
    { id: 5, name: "name", unavailable: false },
];

type Format = {
    id: number,
    name: string,
    unavailable: boolean,
}

interface SwapButtonInterface {
    colorText: string;
    setColorText: (e: string) => void;
    colorBackground: string;
    setColorBackground: (e: string) => void;
    backgroundFormat: Format;
    setBackgroundFormat: ({ id, name, unavailable }: Format) => void;
    textFormat: Format;
    setTextFormat: ({ id, name, unavailable }: Format) => void;
}

export function SwapButton({
    colorText,
    setColorText,
    colorBackground,
    setColorBackground,
    backgroundFormat,
    setBackgroundFormat,
    textFormat,
    setTextFormat,
    ...props }: SwapButtonInterface) {

    const foregroundColor = tinycolor(colorText);
    const backgroundColor = tinycolor(colorBackground);

    function copyColor() {
        if (backgroundColor.isValid()) {
            setColorText(backgroundColor.toHexString());

            formats.forEach(function (format, index) {
                if (format.name === backgroundColor.getFormat()) {
                    setBackgroundFormat(formats[index]);
                }
            });
        }

        if (foregroundColor.isValid()) {
            setColorBackground(foregroundColor.toHexString());

            formats.forEach(function (format, index) {
                if (format.name === foregroundColor.getFormat()) {
                    setTextFormat(formats[index]);
                }
            });
        }
    }

    return (
        <button
            className={styles.swapButton}
            onClick={copyColor}
        >
            <MdSwapVert />
        </button>
    );
}