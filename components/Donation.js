import styles from "../styles/Donation.module.css"

const Donation = ({ donation, setSelectedTitle, setSelectedImg, setSelectedDate, setSelectedText, setSelectedName, setSelectedUrl }) => {

    const handleSelectedPost = () => {
        setSelectedTitle(donation.title);
        setSelectedImg(donation.img);
        setSelectedDate(donation.date);
        setSelectedText(donation.text);
        setSelectedName(donation.name);
        setSelectedUrl(donation.url);
    }

    return (
        // <a href={donation.url} target="_blank">
        <div className={styles.card} onClick={handleSelectedPost}>
            <p className={styles.title}>{donation.title}</p>
            <img src={donation.img} alt="" className={styles.img} />
            <p className={styles.text}>{donation.text.slice(0, 100) + '...'}</p>
            <div className={styles.extra}>
                <p className={styles.name}>{donation.name}</p>
                <p className={styles.date}>{donation.date}</p>
            </div>
        </div>
        // </a>
    );
}

export default Donation;