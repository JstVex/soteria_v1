import styles from "../styles/Websites.module.css"
import ShowPosts from "./ShowPosts";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import useWindowSize from "../hooks/useWindowSize";

const Posts = ({ post, slide }) => {
    const windowSize = useWindowSize();

    const slideLeft = () => {
        let slider = document.getElementsByClassName('slide')[slide];
        if (windowSize.width >= 768) {
            slider.scrollLeft = slider.scrollLeft - 365
        } else {
            slider.scrollLeft = slider.scrollLeft - 290
        }
    }

    const slideRight = () => {
        let slider = document.getElementsByClassName('slide')[slide];
        if (windowSize.width >= 768) {
            slider.scrollLeft = slider.scrollLeft + 365
        } else {
            slider.scrollLeft = slider.scrollLeft + 290
        }
    }

    let i = -1;
    return (
        <>
            <div className={styles.heading}>
                <span className={styles.topic_title}>{post.topic.toUpperCase()}</span>
            </div>
            <div className={styles.wrap}>
                {(post.titles.length > 3 || windowSize.width <= 1212) && (
                    <BsFillCaretLeftFill className={styles.scroll_icon_left} onClick={slideLeft} />
                )}


                <div className={`slide ${styles.topic}`}>
                    {post.titles.map((title) => {
                        i++
                        return <ShowPosts post={post} key={post._id} i={i} />
                    })}
                </div>
                {(post.titles.length > 3 || windowSize.width <= 1212) && (
                    <BsFillCaretRightFill className={styles.scroll_icon_right} onClick={slideRight} />
                )}
            </div>

        </>
    );
}

export default Posts;