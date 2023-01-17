import styles from "../styles/Modal.module.css"
import { motion } from "framer-motion"

const Modal = ({ setSelectedTitle, selectedTitle, selectedImg, selectedDate, selectedText, selectedName, selectedUrl }) => {
    const handleDisappear = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedTitle(null)
        }

    }
    return (
        <motion.div className={`${styles.backdrop} backdrop`} onClick={handleDisappear}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div className={styles.card}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
            >
                <p className={styles.title}>{selectedTitle}</p>
                <div className={styles.flex}>
                    <img src={selectedImg} alt="" className={styles.img} />
                    <p className={styles.text}>{selectedText}</p>
                </div>

                <div className={styles.info}>
                    <span>name - </span>
                    {selectedName}
                </div>
                <div className={styles.info}>
                    <span>start date - </span>
                    {selectedDate}
                </div>
                <div className={styles.info}>
                    <span>end date - </span>
                    {selectedDate}
                </div>
                <div className={styles.info}>
                    <span>target - </span>
                    {selectedDate}
                </div>
                <div className={styles.info}>
                    <span>payment methods - </span>
                    {selectedDate}
                </div>
                <button className={styles.button}>
                    <a href={selectedUrl} target="_blank">
                        <span className={styles.btn_text}>donate</span>
                    </a>
                </button>
            </motion.div>
        </motion.div>

    );
}

export default Modal;
