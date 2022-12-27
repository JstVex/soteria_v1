import styles from "../styles/Channels.module.css"
import { BsFillPlayFill } from "react-icons/bs"

const ShowVids = ({ vid, i }) => {
    return (
        <div className={styles.card}>
            <img src={vid.imgs[i]} alt="" className={styles.img} />
            <p className={styles.title}>{vid.titles[i]}</p>
            <div className={styles.extra}>
                <div className={styles.viewNdate}>
                    <span className={styles.view}>{vid.views[i]}</span>
                    <span className={styles.dot}>.</span>
                    <span className={styles.date}>{vid.dates[i]}</span>
                    <span className={styles.dot}>.</span>
                    <span className={styles.name}>{vid.vid}</span>
                </div>
                <a href={vid.urls[i]} target="_blank" ><BsFillPlayFill className={styles.play} /></a>
            </div>
        </div>
    );
}

export default ShowVids;