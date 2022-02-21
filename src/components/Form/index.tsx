import React from 'react';

import { useColor } from '../../hook/useColor';
import { Input } from '../Input';
import { SwapButton } from '../SwapButton';

import styles from './styles.module.scss';

export function Form() {
    const {
        foregroundColor,
        showForegroundColorPicker,
        setForegroundColor,
        setShowForegroundColorPicker,

        backgroundColor,
        showBackgroundColorPicker,
        setBackgroundColor,
        ssetSowBackgroundColorPicker
    } = useColor();

    return (
        <section className={styles.container}>
            <div>
                <div className={styles.title}>
                    <h1>
                        <img src="owl.svg" alt="Owl Color" />
                        Owl <span>Color</span>
                    </h1>
                    <p>Color Contrast Checker App</p>
                </div>
                <div className={styles.textColorWrap}>
                    <label>Text Color</label>
                    <Input
                        show={showForegroundColorPicker}
                        toggle={setShowForegroundColorPicker}
                        color={foregroundColor}
                        setColor={setForegroundColor}
                    />
                </div>
                <SwapButton
                    colorText={foregroundColor}
                    setColorText={setForegroundColor}
                    colorBackground={backgroundColor}
                    setColorBackground={setBackgroundColor}
                />
                <div className={styles.backgroundColorWrap}>
                    <label>Background Color</label>
                    <Input
                        show={showBackgroundColorPicker}
                        toggle={ssetSowBackgroundColorPicker}
                        color={backgroundColor}
                        setColor={setBackgroundColor}
                    />
                </div>
            </div>
        </section>
    );
}