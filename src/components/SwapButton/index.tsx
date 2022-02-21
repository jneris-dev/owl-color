import React from 'react';
import { MdSwapVert } from 'react-icons/md';
import tinycolor from 'tinycolor2';

import styles from './styles.module.scss';

interface SwapButtonInterface {
    colorText: string;
    setColorText: (e: string) => void;
    colorBackground: string;
    setColorBackground: (e: string) => void;
}

export function SwapButton({ colorText, setColorText, colorBackground, setColorBackground, ...props }: SwapButtonInterface) {

    const foregroundColor = tinycolor(colorText);
    const backgroundColor = tinycolor(colorBackground);

    function copyColor() {
        if (foregroundColor.isValid()) {
            setColorBackground(foregroundColor.toHexString());
        }

        if (backgroundColor.isValid()) {
            setColorText(backgroundColor.toHexString());
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