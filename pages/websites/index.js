import { useState } from 'react';
import styles from '../../styles/WebAndUtube.module.css'
import Link from 'next/link';
import Webs from '../../components/Webs';

const Websites = () => {
    const [website, setWebsite] = useState('');

    // const chooseWebsite = async () => {

    // }

    return (
        <div className="container">
            <div className="title">
                {website}
            </div>
            <label htmlFor='websites' className={styles.label}>
                Choose a website:
            </label>
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
                {/* <option value=""></option>
                <option value=""></option>
                <option value=""></option> */}
            </select>
            <button className={styles.button}><Link href={`/websites/${website}`} >select</Link></button>
            <Webs />
        </div>
    );
}

export default Websites;