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
            </div>
        </div>
    );
}

export default Sidenavbar;