import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { FiMenu } from 'react-icons/fi';
// import Sidenavbar from './Sidenavbar';
// import { useState } from 'react';

const Navbar = ({ handleToggle }) => {
    // const [toggle, setToggle] = useState(false);

    // const handleToggle = () => {
    //     setToggle(!toggle)
    // }

    return (
        <div className={styles.container}>
            <p className={styles.title}>
                <Link href="/">Soteria</Link>
            </p>

            <ul className={styles.links}>
                {/* <li>
                    <Link href="/">home</Link>
                </li> */}
                <li>
                    <Link href="/websites">websites</Link>
                </li>
                <li>
                    <Link href="/youtube">youtube</Link>
                </li>
                <li>
                    <Link href="/donations">donations</Link>
                </li>
                <li>
                    <Link href="/campaigns">campaigns</Link>
                </li>
            </ul>
            {/* <div className={styles.links}>
                <Link href="/">home</Link>
                <Link href="/websites">websites</Link>
                <Link href="/channels">channels</Link>
                <Link href="/donations">donations</Link>
                <Link href="/campaigns">campaigns</Link>
            </div> */}
            <FiMenu className={styles.icon} onClick={handleToggle} />
            {/* <Sidenavbar toggle={toggle} /> */}
        </div>
    );
}

export default Navbar;
