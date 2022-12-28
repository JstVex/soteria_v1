import styles from "../styles/Websites.module.css"
import ShowPosts from "./ShowPosts";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs"

const Posts = ({ post, slide }) => {
    const slideLeft = () => {
        let slider = document.getElementsByClassName('slide')[slide];
        slider.scrollLeft = slider.scrollLeft - 290
    }

    const slideRight = () => {
        let slider = document.getElementsByClassName('slide')[slide];
        slider.scrollLeft = slider.scrollLeft + 290
    }

    let i = -1;
    return (
        <>
            <div className={styles.heading}>
                <span className={styles.topic_title}>{post.topic.toUpperCase()}</span>
            </div>
            <div className={styles.wrap}>
                <BsFillCaretLeftFill className={styles.scroll_icon} onClick={slideLeft} />

                <div className={`slide ${styles.topic}`}>
                    {post.titles.map((title) => {
                        i++
                        return <ShowPosts post={post} key={post._id} i={i} />
                    })}
                </div>
                <BsFillCaretRightFill className={styles.scroll_icon} onClick={slideRight} />
            </div>

        </>
    );
}

export default Posts;