import styles from "../styles/Websites.module.css"
import Image from "next/image";

const ShowPosts = ({ post, i }) => {
    return (
        <a href={post.urls[i]} target="_blank">
            <div className={styles.card2}>
                <Image src={post.imgs[i]} alt="" className={styles.img} width={1000} height={1000} />
                <p className={styles.title}>{post.titles[i]}</p>
                <span className={styles.text}>
                    {post.texts[i].length > 140
                        ? post.texts[i].slice(0, 140) + '...'
                        : post.texts[i]}
                </span>
                <div className={styles.extra}>
                    <span className={styles.date}>{post.dates[i]}</span>
                    <span className={styles.name}>{post.website}</span>
                </div>
            </div>
        </a>
    );
}

export default ShowPosts;