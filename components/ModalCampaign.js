import styles from "../styles/Modal.module.css"
import { motion } from "framer-motion"
import Image from "next/image"

const ModalCampaign = ({ setSelectedTitle, selectedTitle, selectedImg, selectedStartDate, selectedEndDate, selectedText, selectedName, selectedTarget, selectedUrl, selectedPayment, selectedPrize, selectedForwhom }) => {

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
                    <Image src={selectedImg} alt="" className={styles.img} width={1000} height={1000} />
                    <p className={styles.text}>{selectedText}</p>
                </div>

                <div className={styles.info}>
                    <span>name - </span>
                    {selectedName}
                </div>
                <div className={styles.info}>
                    <span>start date - </span>
                    {selectedStartDate}
                </div>
                <div className={styles.info}>
                    <span>end date - </span>
                    {selectedEndDate}
                </div>
                <div className={styles.info}>
                    <span>target - </span>
                    {selectedTarget}
                </div>
                <div className={styles.info}>
                    <span>prize - </span>
                    {selectedPrize}
                </div>
                <div className={styles.info}>
                    <span>for whom - </span>
                    {selectedForwhom}
                </div>
                <div className={styles.info}>
                    <span>payment methods - </span>
                    {selectedPayment.map((payment, index) => {
                        return <span key={index}>{payment}</span>
                    })}
                </div>
                <button className={styles.button}>
                    <a href={selectedUrl} target="_blank" rel="noreferrer">
                        <span className={styles.btn_text}>donate</span>
                    </a>
                </button>
            </motion.div>
        </motion.div>
    );
}

export default ModalCampaign;