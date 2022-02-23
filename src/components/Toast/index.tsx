import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useColor } from "../../hook/useColor";

import styles from './styles.module.scss'

export function Toast() {
    const { toast, setToast } = useColor();

    const ms = 8000;

    const timeout = setTimeout(() => {
        setToast({
            show: false,
            message: '',
        });
    }, ms);

    useEffect(() => {
        return () => {
            clearTimeout(timeout);
        };
    }, [toast]);

    return (
        <>
            <AnimatePresence>
                {toast.show && (
                    <motion.div
                        className={styles.toast}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <p>{toast.message}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};