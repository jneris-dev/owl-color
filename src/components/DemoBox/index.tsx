import React, { useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';
import { useColor } from '../../hook/useColor';
import { MdOpenInNew } from 'react-icons/md';
import { BsCircle, BsSquare, BsTriangle } from 'react-icons/bs';

import { ContrastResult } from '../ContrastResult';

import styles from './styles.module.scss';

export function DemoBox() {
    const { contrastRatio, backgroundColor, foregroundColor } = useColor();

    const [contrast, setContrast] = useState(contrastRatio);

    useEffect(() => {
        setContrast(tinycolor.readability(backgroundColor, foregroundColor));
    }, [backgroundColor, foregroundColor]);

    return (
        <section className={styles.container} style={{ backgroundColor: backgroundColor }}>
            <ContrastResult contrast={contrast} />
            <div style={{ color: foregroundColor }} className={styles.demoContent}>
                <div className={styles.iconsContainer}>
                    <BsCircle size={27} />
                    <BsTriangle size={28} />
                    <BsSquare size={27} />
                </div>
                <div className={`${styles.largeContent} ${contrast < 4.5 && styles.lineThrough}`}>
                    <strong>Large Text - 24px/18pt</strong>
                    <p>
                        Contrast ratio is a measure of the difference in perceived brightness between two colors. The higher the ratio, the better the contrast.
                    </p>
                </div>
                <div className={`${styles.normalContent} ${contrast < 7 && styles.lineThrough}`}>
                    <strong>Normal Text - 16px</strong>
                    <p>
                        According to Web Content Accessibility Guidelines (WCAG) 2.0, text and images of text should have a minimum contrast ratio of 4.5:1 (Level AA), while large text should have minimum contrast ratio of 3:1. For enhanced contrast (Level AAA), normal text and large text should have minimum contrast ratio of 7:1 and 4.5:1 respectively.
                    </p>
                </div>
                <div className={styles.buttonsWrap}>
                    <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" rel="noreferrer" target="_blank" title="WCAG 2.0">
                        <button
                            style={{
                                backgroundColor: backgroundColor,
                                color: foregroundColor,
                                borderColor: foregroundColor
                            }}>
                            <MdOpenInNew size={20} /> WCAG 2.0
                        </button>
                    </a>
                    <a href="https://webaim.org/articles/contrast/" rel="noreferrer" target="_blank" title="WebAIM article">
                        <button
                            style={{
                                backgroundColor: backgroundColor,
                                color: foregroundColor,
                                borderColor: foregroundColor
                            }}>
                            <MdOpenInNew size={20} /> WebAIM article
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}