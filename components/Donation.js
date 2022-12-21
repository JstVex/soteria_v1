import styles from "../styles/Donation.module.css"

const Donation = ({ donation }) => {
    return (
        <a href={donation.url} target="_blank">
            <div className={styles.card}>
                <p className={styles.title}>{donation.title}</p>
                <img src={donation.img} alt="" className={styles.img} />
                <p className={styles.text}>{donation.text}</p>
                <div className={styles.extra}>
                    <p className={styles.name}>{donation.name}</p>
                    <p className={styles.date}>{donation.date}</p>
                </div>
            </div>
        </a>
    );
}

export default Donation;