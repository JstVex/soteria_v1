import Donation from '../../components/Donation';
import styles from '../../styles/Donations.module.css'
import Modal from '../../components/Modal';
import { useEffect, useState } from 'react';
import { RiArrowGoBackFill } from "react-icons/ri"
import Link from 'next/link';

const Location = ({ donations, locationUrl }) => {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    const [selectedName, setSelectedName] = useState(null);
    const [selectedTarget, setSelectedTarget] = useState(null);
    const [selectedUrl, setSelectedUrl] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const [loading, setLoading] = useState(true);

    const [count, setCount] = useState(0);
    console.log(donations.length)

    useEffect(() => {
        for (let i = 0; i <= donations.length; i++) {
            setCount(i);
        }
        setLoading(false);
    }, [donations])

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    // console.log(donations)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {/* <img src="https://dsm01pap007files.storage.live.com/y4mq5siKMJ_7wZGjlsco7mGG1W523cQaNl79CM_CT40M9gHMvhRseTshSjsCJu72xdvCvaBaPlJtjzShC44aC8lMG-AS5aNGX042nqOaGOFKjShVx7bAYiuhB2Zq2qvzRbQvM00EfS3toRjVvf5TgVG_N0QSUD2R3KB66197QrCeg5a_Heiv3nKJgyR8R3E4jbo?width=1840&height=1226&cropmode=none" alt="" className={styles.image} />
                <p className={styles.title}>Donation</p> */}
                <span className={styles.title}>{locationUrl}</span>
                <span className={styles.count}>{count} available posts</span>

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

export async function getStaticPaths() {
    return {
        paths: [{ params: { location: 'kachin' } }, { params: { location: 'kayah' } }, { params: { location: 'kayin' } }, { params: { location: 'chin' } }, { params: { location: 'mon' } }, { params: { location: 'rakhine' } }, { params: { location: 'shan' } }, { params: { location: 'ayeyarwady' } }, { params: { location: 'bago' } }, { params: { location: 'magway' } }, { params: { location: 'mandalay' } }, { params: { location: 'sagaing' } }, { params: { location: 'tanintharyi' } }, { params: { location: 'yangon' } }],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.SERVER_URL}/donations/${params.location}`)
    const donations = await res.json()
    let locationUrl = params.location

    return { props: { donations: donations, locationUrl: locationUrl } }
}

// export async function getServerSideProps() {
//     const res = await fetch(`${process.env.SERVER_URL}/donations/yangon`)
//     const donations = await res.json()
//     return { props: { donations } }
// }

export default Location;
