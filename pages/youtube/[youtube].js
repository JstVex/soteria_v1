import styles from "../../styles/Channel.module.css";
import Videos from "../../components/Videos";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Image from "next/image";

const Youtube = ({ vids }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loading />
    }

    return (
        <div className={styles.container} >
            <div className={styles.header}>
                <Image src={vids[0].pfp} alt="" className={styles.pfp} width={1000} height={1000} />
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
    const res = await fetch(`https://soteria-backend-alc9.onrender.com/channels/${params.youtube}`)
    const vids = await res.json()

    return { props: { vids } }
}

export default Youtube;