import styles from "../styles/Websites.module.css"
import ShowPosts from "./ShowPosts";

const Posts = ({ post }) => {
    let i = -1;
    return (
        <div className={styles.topic}>
            {post.titles.map((title) => {
                i++
                return <ShowPosts post={post} key={post._id} i={i} />
            })}
        </div>
    );
}

export default Posts;