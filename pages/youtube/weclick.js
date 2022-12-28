import styles from "../../styles/Channel.module.css";
import Videos from "../../components/Videos";

const Weclick = ({ vids }) => {
    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <img src={vids[0].pfp} alt="" className={styles.pfp} />
                <div className={styles.wrapper}>
                    <span className={styles.channel}>{vids[0].channel.toUpperCase()}</span>
                    <span className={styles.subs}>{vids[0].subs}</span>
                </div>
            </div>
            <div className={styles.heading}>
                Videos
            </div>
            {vids && vids.map((vid) => {
                return <Videos vid={vid} key={vid._id} />
            })}
        </div >
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://soteria-backend-alc9.onrender.com/channels/weclick`);
    const vids = await res.json();
    return { props: { vids } }
}

export default Weclick;