import { useState } from 'react';
import styles from '../../styles/WebAndUtube.module.css'
import Link from 'next/link';
import Latestwebs from '../../components/Latestwebs';

const Websites = ({ webs }) => {
    const [website, setWebsite] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Choose a website you wish to see
                </div>
                <label htmlFor='websites' className={styles.label}>
                    Choose a website:
                </label>
                <div className={styles.wrap}>
                    <select
                        name="websites"
                        id="websites"
                        defaultValue={website}
                        onChange={e => setWebsite(e.target.value)}
                        className={styles.select}
                    >
                        <option value="">Choose a website</option>
                        <option value="weclick4pdf">weclick4pdf</option>
                        <option value="pyithubawa">pyithubawa</option>
                    </select>
                    <button className={styles.button}>
                        <Link href={`/websites/${website}`}>go</Link>
                    </button>
                </div>
            </div>
            <div className={styles.heading}>
                Latest posts from all websites
            </div>
            <div className={styles.content}>
                {webs && webs.map((web) => {
                    return <Latestwebs web={web} key={web._id} />
                })}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:4004/websites/firstposts`);
    const webs = await res.json();
    return { props: { webs } }
}

export default Websites;

