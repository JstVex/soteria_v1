import { useState } from 'react';
import styles from '../../styles/WebAndUtube.module.css'
import Link from 'next/link';

const Youtube = () => {
    const [utube, setUtube] = useState('');

    // const chooseWebsite = async () => {

    // }

    return (
        <div className="container">
            <div className="title">
                {utube}
            </div>
            <label htmlFor='channels' className={styles.label}>
                Choose a youtube channel:
            </label>
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
            <button className={styles.button}><Link href={`/websites/${utube.toLowerCase()}`} >select</Link></button>
        </div>
    );
}

export default Youtube;