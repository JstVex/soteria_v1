import styles from "../../styles/Channel.module.css";
import Videos from "../../components/Videos";

const Raungni = ({ vids }) => {
    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <img src={vids[0].pfp} alt="" className={styles.pfp} />
                <div className={styles.wrap}>
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

export async function getStaticProps() {
    const res = await fetch(`https://soteria-backend-alc9.onrender.com/channels/raungni`);
    const vids = await res.json();
    return { props: { vids } }
}

export default Raungni;