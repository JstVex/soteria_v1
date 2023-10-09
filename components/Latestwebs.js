import styles from "../styles/Websites.module.css"
import Image from "next/image";

const Lastestwebs = ({ web }) => {
    if (web.titles[0] === undefined) {
        return (
            <div className={styles.card_warn}>
                <Image src="https://onedrive.live.com/embed?resid=3616EC68410FC656%21784&authkey=%21AMoggb1PUVXKia4&width=284&height=178" alt="" className={styles.img} width={1000} height={1000} />
                <div className={styles.warn_text}>
                    {web.website} is currently not available
                </div>
            </div>
        )
    }
    return (
        <a href={web.urls[0]} target="_blank">
            <div className={styles.card}>
                <Image src={web.imgs[0]} alt="" className={styles.img} width={1000} height={1000} />
                <p className={styles.title}>{web.titles[0]}</p>
                <span className={styles.text}>
                    {web.texts[0]?.length > 150
                        ? web.texts[0]?.slice(0, 150) + '...'
                        : web.texts[0]}

                </span>
                <div className={styles.extra}>
                    <span className={styles.date}>{web.dates[0]}</span>
                    <span className={styles.name}>{web.website}</span>
                </div>
            </div>
        </a>
    );
}

export default Lastestwebs;