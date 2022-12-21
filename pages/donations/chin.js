import Donation from '../../components/Donation';
import styles from '../../styles/Donations.module.css'

const Chin = ({ donations }) => {
    console.log(donations)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src="https://dsm01pap007files.storage.live.com/y4mq5siKMJ_7wZGjlsco7mGG1W523cQaNl79CM_CT40M9gHMvhRseTshSjsCJu72xdvCvaBaPlJtjzShC44aC8lMG-AS5aNGX042nqOaGOFKjShVx7bAYiuhB2Zq2qvzRbQvM00EfS3toRjVvf5TgVG_N0QSUD2R3KB66197QrCeg5a_Heiv3nKJgyR8R3E4jbo?width=1840&height=1226&cropmode=none" alt="" className={styles.image} />
                <p className={styles.title}>Chin</p>
            </div>
            <div className={styles.heading}>
                <span className={styles.heading_content}>Donations</span>
            </div>
            <div className={styles.content}>
                {donations && donations.map((donation) => {
                    return <Donation donation={donation} key={donation._id} />
                })}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://soteria-backend-alc9.onrender.com/donations/chin`)
    const donations = await res.json()

    // Pass data to the page via props
    return { props: { donations } }
}

export default Chin;
