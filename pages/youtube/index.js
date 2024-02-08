import { useState } from 'react';
import styles from '../../styles/WebAndUtube.module.css'
import Link from 'next/link';
import Latestchannels from '../../components/LatestChannels';

const Youtube = ({ channels }) => {
    const [utube, setUtube] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Choose a channel you wish to see
                </div>
                <label htmlFor='channels' className={styles.label}>
                    Choose a youtube channel:
                </label>
                <div className={styles.wrap}>
                    <select
                        name="channels"
                        id="channels"
                        defaultValue={utube}
                        onChange={e => setUtube(e.target.value)}
                        className={styles.select}
                    >
                        <option value="">Choose a channel</option>
                        <option value="WeClick">weclick</option>
                        <option value="WeClick4MM">weclick4mm</option>
                        <option value="RaungNi">raungni</option>
                        <option value="PaDayTharPin">padaytharpin</option>
                    </select>
                    <button className={styles.button}>
                        <Link href={`/youtube/${utube.toLowerCase()}`} >go</Link>
                    </button>
                </div>
            </div>
            <div className={styles.heading}>
                Latest videos from all channels
            </div>
            <div className={styles.content}>
                {channels && channels.map((channel) => {
                    return <Latestchannels channel={channel} key={channel._id} />
                })}
            </div>


        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:4004/channels`);
    const channels = await res.json();
    return { props: { channels } }
}


export default Youtube;