import styles from "../../styles/Website.module.css";
import Posts from "../../components/Posts";

const Weclick4pdf = ({ posts }) => {
    console.log(posts)
    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <p className={styles.website}>{posts[0].website.toUpperCase()}</p>
            </div>
            <div className={styles.heading}>
                <p>Activity</p>
            </div>
            {posts && posts.map((post) => {
                return <Posts post={post} key={post._id} />
            })}
        </div >
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://soteria-backend-alc9.onrender.com/websites/weclick4pdf`);
    const posts = await res.json();
    return { props: { posts } }
}

export default Weclick4pdf;