import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                Made with love and hope
            </div>
            <div className={styles.copyright}>
                &copy; Soteria 2023
            </div>
        </div>
    );
}

export default Footer;