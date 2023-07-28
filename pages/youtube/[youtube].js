import styles from "../../styles/Channel.module.css";
import Videos from "../../components/Videos";

const Youtube = ({ vids }) => {
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

export async function getStaticPaths() {
    return {
        paths: [{ params: { youtube: 'weclick' } }, { params: { youtube: 'weclick4mm' } }, { params: { youtube: 'raungni' } }, { params: { youtube: 'padaytharpin' } }],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.SERVER_URL}/${params.youtube}`)
    const vids = await res.json()

    return { props: { vids } }
}

export default Youtube;