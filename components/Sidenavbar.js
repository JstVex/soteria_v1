import Link from "next/link";
import styles from "../styles/Sidenavbar.module.css"

const Sidenavbar = ({ toggle }) => {
    return (
        <div className={`${styles.container} ${toggle ? styles.changed : null}`} style={toggle ? { display: 'block' } : { display: 'none' }}>
            <div className={styles.links}>
                <Link href="/websites" className={styles.main_link}>
                    <span className={styles.link}>websites</span>
                </Link>
                <Link href="/youtube" className={styles.main_link}>
                    <span className={styles.link}>youtube</span>
                </Link>
                <Link href="/donations" className={styles.main_link}>
                    <span className={styles.link}>donations</span>
                </Link>
                <Link href="/campaigns" className={styles.main_link}>
                    <span className={styles.link}>campaigns</span>
                </Link>
                {/* <Link href='/profile' className={styles.link}>Profile</Link>
                <Link href='/contribute' className={styles.link}>Contribute</Link>
                <Link href='/login' className={styles.link}>Login / SignUp</Link>
                <p className={styles.link}>Theme</p> */}
            </div>
        </div>
    );
}

export default Sidenavbar;