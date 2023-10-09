import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { FiMenu } from 'react-icons/fi';

const Navbar = ({ handleToggle }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                <Link href="/">Soteria</Link>
            </p>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <Link href="/websites">websites</Link>
                </li>
                <li className={styles.link}>
                    <Link href="/youtube">youtube</Link>
                </li>
                <li className={styles.link}>
                    <Link href="/donations">donations</Link>
                </li>
                <li className={styles.link}>
                    <Link href="/campaigns">campaigns</Link>
                </li>
            </ul>
            <FiMenu className={styles.icon} onClick={handleToggle} />
        </div>
    );
}

export default Navbar;
