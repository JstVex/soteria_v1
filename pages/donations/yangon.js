import Donation from '../../components/Donation';
import styles from '../../styles/Donations.module.css'
import Modal from '../../components/Modal';
import { useState } from 'react';
import { RiArrowGoBackFill } from "react-icons/ri"
import Link from 'next/link';

const Yangon = ({ donations }) => {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    const [selectedName, setSelectedName] = useState(null);
    const [selectedTarget, setSelectedTarget] = useState(null);
    const [selectedUrl, setSelectedUrl] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);

    console.log(donations)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src="https://dsm01pap007files.storage.live.com/y4mq5siKMJ_7wZGjlsco7mGG1W523cQaNl79CM_CT40M9gHMvhRseTshSjsCJu72xdvCvaBaPlJtjzShC44aC8lMG-AS5aNGX042nqOaGOFKjShVx7bAYiuhB2Zq2qvzRbQvM00EfS3toRjVvf5TgVG_N0QSUD2R3KB66197QrCeg5a_Heiv3nKJgyR8R3E4jbo?width=1840&height=1226&cropmode=none" alt="" className={styles.image} />
                <p className={styles.title}>Yangon</p>
            </div>
            <Link href='/donations' className={styles.goback}>
                <RiArrowGoBackFill className={styles.gobackicon} />
                <span className={styles.gobacktext}>go back</span>
            </Link>

            <div className={styles.heading}>
                <span className={styles.heading_content}>Donations</span>
            </div>
            <div className={styles.content}>
                {donations && donations.map((donation) => {
                    return <Donation donation={donation} key={donation._id} setSelectedTitle={setSelectedTitle}
                        setSelectedImg={setSelectedImg} setSelectedStartDate={setSelectedStartDate} setSelectedEndDate={setSelectedEndDate} setSelectedText={setSelectedText} setSelectedName={setSelectedName} setSelectedTarget={setSelectedTarget} setSelectedUrl={setSelectedUrl} setSelectedPayment={setSelectedPayment} />
                })}
            </div>
            {selectedTitle && <Modal setSelectedTitle={setSelectedTitle} selectedTitle={selectedTitle} selectedImg={selectedImg} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} selectedText={selectedText} selectedName={selectedName} selectedTarget={selectedTarget} selectedUrl={selectedUrl} selectedPayment={selectedPayment} />}
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://soteria-backend-alc9.onrender.com/donations/yangon`)
    const donations = await res.json()
    return { props: { donations } }
}

export default Yangon;
