import styles from "../styles/Channels.module.css"
import { BsFillPlayFill } from "react-icons/bs"
import Image from "next/image"

const Latestchannels = ({ channel }) => {
    return (
        <div className={styles.card}>
            <Image src={channel.imgs[0]} alt="" className={styles.img} width={1000} height={1000} />
            <p className={styles.title}>{channel.titles[0]}</p>
            <div className={styles.extra}>
                <div className={styles.viewNdate}>
                    <span className={styles.view}>{channel.views[0]}</span>
                    <span className={styles.dot}>.</span>
                    <span className={styles.date}>{channel.dates[0]}</span>
                    <span className={styles.dot}>.</span>
                    <span className={styles.name}>{channel.channel}</span>
                </div>
                <a href={channel.urls[0]} target="_blank" rel="noreferrer"><BsFillPlayFill className={styles.play} /></a>
            </div>
        </div>
    );
}

export default Latestchannels;