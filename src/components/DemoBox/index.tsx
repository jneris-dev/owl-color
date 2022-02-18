import React, { useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';
import { useColor } from '../../hook/useColor';
import { MdOpenInNew } from 'react-icons/md';

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
                <h5 className={`${contrast < 4.5 && styles.lineThrough}`}>This is a large text for demo</h5>
                <p className={`${contrast < 7 && styles.lineThrough}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis quam similique, libero quas tempora voluptates! Impedit veritatis placeat possimus harum dicta quis tenetur vel maiores ad consectetur facilis, fugiat labore laudantium accusantium nisi est sit sequi. Doloremque provident maxime, ex ipsa dolores incidunt, architecto reprehenderit temporibus iste labore eaque!
                </p>
                <div className={styles.buttonsWrap}>
                    <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" rel="noopener" target="_blank" title="WCAG 2.0">
                        <button
                            style={{
                                backgroundColor: backgroundColor,
                                color: foregroundColor,
                                borderColor: foregroundColor
                            }}>
                            <MdOpenInNew size={20} /> WCAG 2.0
                        </button>
                    </a>
                    <a href="https://webaim.org/articles/contrast/" rel="noopener" target="_blank" title="WebAIM article">
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