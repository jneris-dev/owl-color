import React from 'react';
import { MdCheck, MdClose } from 'react-icons/md';

import { RatingInterface } from '../../interface/useInterface';

import styles from './styles.module.scss';

export function Rating({ pass, ...props }: RatingInterface) {
    return (
        <span className={styles.rating} style={pass ? { color: '#67e900' } : { color: '#ff6e60' }}>
            {pass ? <MdCheck size={20} /> : <MdClose size={20} />}
            <span>Pass</span>
        </span>
    );
}