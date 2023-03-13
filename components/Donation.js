import styles from "../styles/Donation.module.css"

const Donation = ({ donation, setSelectedTitle, setSelectedImg, setSelectedStartDate, setSelectedEndDate, setSelectedText, setSelectedName, setSelectedTarget, setSelectedUrl, setSelectedPayment }) => {

    const handleSelectedPost = () => {
        setSelectedTitle(donation.title);
        setSelectedImg(donation.img);
        setSelectedStartDate(donation.startDate);
        setSelectedEndDate(donation.endDate);
        setSelectedText(donation.text);
        setSelectedName(donation.name);
        setSelectedTarget(donation.target);
        setSelectedUrl(donation.url);
        setSelectedPayment(donation.payment)
    }

    return (
        // <a href={donation.url} target="_blank">
        <div className={styles.card} onClick={handleSelectedPost}>
            <p className={styles.title}>{donation.title}</p>
            <img src={donation.img} alt="" className={styles.img} />
            <p className={styles.text}>{donation.text.slice(0, 100) + '...'}</p>
            <div className={styles.extra}>
                <p className={styles.name}>{donation.name}</p>
                <p className={styles.date}>{donation.startDate}</p>
            </div>
        </div>
        // </a>
    );
}

export default Donation;