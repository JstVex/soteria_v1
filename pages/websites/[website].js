import styles from "../../styles/Website.module.css";
import Posts from "../../components/Posts";

const Website = ({ posts }) => {
    console.log(posts)
    let slide = -1;
    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <p className={styles.website}>{posts[0].website.toUpperCase()}</p>
            </div>
            {posts && posts.map((post) => {
                slide++;
                return <Posts post={post} key={post._id} slide={slide} />
            })}
        </div >
    );
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { website: 'weclick4pdf' } }, { params: { website: 'pyithubawa' } }],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.SERVER_URL}/websites/${params.website}`)
    const posts = await res.json()

    return { props: { posts } }
}

// export async function getStaticProps() {
//     const res = await fetch(`${process.env.SERVER_URL}/websites/pyithubawa`);
//     const posts = await res.json();
//     return { props: { posts } }
// }

export default Website;