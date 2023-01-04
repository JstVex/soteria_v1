import Link from "next/link";
import styles from "../styles/Sidenavbar.module.css"

const Sidenavbar = ({ toggle }) => {
    return (
        <div className={styles.container} style={toggle ? { display: 'block' } : { display: 'none' }}>
            <div className={styles.links}>
                <div className={styles.main_link}>
                    <Link href="/websites" className={styles.content}>websites</Link>
                </div>

                <Link href="/youtube" className={styles.main_link}>youtube</Link>
                <Link href="/donations" className={styles.main_link}>donations</Link>
                <Link href="/campaigns" className={styles.main_link}>campaigns</Link>
                {/* <Link href='/profile' className={styles.link}>Profile</Link>
                <Link href='/contribute' className={styles.link}>Contribute</Link>
                <Link href='/login' className={styles.link}>Login / SignUp</Link>
                <p className={styles.link}>Theme</p> */}
            </div>
        </div>
    );
}

export default Sidenavbar;