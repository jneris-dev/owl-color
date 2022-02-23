import React from 'react';
import { Rating } from '../Rating';

type ContrastInterface = {
    contrast: number;
}

import styles from './styles.module.scss';

export function ContrastResult({ contrast, ...props }: ContrastInterface) {

    const aaNormal = contrast >= 4.5;
    const aaLarge = contrast >= 3;
    const aaaNormal = contrast >= 7;
    const aaaLarge = contrast >= 4.5;

    let resultColor = "#67e900";

    if (contrast < 7 && contrast > 3.1) {
        resultColor = "#f57f17";
    } else if (contrast < 3.1) {
        resultColor = "#ff6e60";
    } else {
        resultColor = "#67e900";
    }
    return (
        <div className={styles.header}>
            <div className={styles.ratioWrapper}>
                <h4>Contrast Ratio</h4>
                <b style={{ color: resultColor }}>
                    {contrast ? contrast.toFixed(2) : 0}
                </b>
                <span>/ 21</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Normal Text</th>
                        <th scope="col">Large Text</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AA</td>
                        <td>
                            <Rating pass={aaNormal} />
                        </td>
                        <td>
                            <Rating pass={aaLarge} />
                        </td>
                    </tr>
                    <tr>
                        <td>AAA</td>
                        <td>
                            <Rating pass={aaaNormal} />
                        </td>
                        <td>
                            <Rating pass={aaaLarge} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}