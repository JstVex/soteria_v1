import styles from "../styles/Websites.module.css"

const Lastestwebs = ({ web }) => {
    console.log(web)

    if (web.titles[0] === undefined) {
        return (
            <div className={styles.card_warn}>
                <p className={styles.warn}>
                    {web.website} is currently not available
                </p>
            </div>
        )
    }
    return (
        <a href={web.urls[0]} target="_blank">
            <div className={styles.card}>
                <img src={web.imgs[0]} alt="" className={styles.img} />
                <p className={styles.title}>{web.titles[0]}</p>
                <span className={styles.text}>{web.texts[0]?.slice(0, 150) + '...'}</span>
                <div className={styles.extra}>
                    <span className={styles.date}>{web.dates[0]}</span>
                    <span className={styles.name}>{web.website}</span>
                </div>
            </div>
        </a>
    );
}

export default Lastestwebs;