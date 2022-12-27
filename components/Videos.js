import styles from "../styles/Channels.module.css"
import ShowVids from "./ShowVids";

const Videos = ({ vid }) => {
    let i = -1;
    console.log(vid)
    return (
        <div className={styles.content}>
            {vid.views.map((view) => {
                i++
                return <ShowVids vid={vid} key={vid._id} i={i} />
            })}
        </div>
    );
}

export default Videos;