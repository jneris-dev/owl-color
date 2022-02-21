import React from 'react';

import GithubCorner from 'react-github-corner';

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
        setShowBackgroundColorPicker,

        setToast
    } = useColor();

    return (
        <section className={styles.container}>
            <GithubCorner
                href="https://github.com/jneris-dev/owl-color"
                direction="left"
                bannerColor="#f2484b"
                octoColor="#16161a"
                size={60}
                target="_blank"
            />
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h1>
                        <img src="owl.svg" alt="Owl Color" />
                        Owl <span>Color</span>
                    </h1>
                    <p>Color Contrast Checker App.</p>
                </div>
                <div className={styles.backgroundColorWrap}>
                    <label>Background</label>
                    <Input
                        show={showBackgroundColorPicker}
                        toggle={setShowBackgroundColorPicker}
                        color={backgroundColor}
                        setColor={setBackgroundColor}
                        toast={setToast}
                    />
                </div>
                <SwapButton
                    colorText={foregroundColor}
                    setColorText={setForegroundColor}
                    colorBackground={backgroundColor}
                    setColorBackground={setBackgroundColor}
                />
                <div className={styles.textColorWrap}>
                    <label>Foreground</label>
                    <Input
                        show={showForegroundColorPicker}
                        toggle={setShowForegroundColorPicker}
                        color={foregroundColor}
                        setColor={setForegroundColor}
                        toast={setToast}
                    />
                </div>
            </div>
            <footer>
                <p>
                    Created by
                    <a
                        href="https://jneris.com.br/"
                        title="JNeris - Frontend Developer and Web Designer"
                        target="_blank"
                        rel="noopener"
                    >
                        João Neris
                    </a>
                </p>
            </footer>
        </section>
    );
}