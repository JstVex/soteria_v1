import styles from "../styles/Donation.module.css"
import Image from "next/image"

const Campaign = ({ campaign, setSelectedTitle, setSelectedImg, setSelectedStartDate, setSelectedEndDate, setSelectedText, setSelectedName, setSelectedTarget, setSelectedUrl, setSelectedPayment, setSelectedPrize, setSelectedForwhom }) => {
    const handleSelectedPost = () => {
        setSelectedTitle(campaign.title);
        setSelectedImg(campaign.img);
        setSelectedStartDate(campaign.startDate);
        setSelectedEndDate(campaign.endDate);
        setSelectedText(campaign.text);
        setSelectedName(campaign.name);
        setSelectedTarget(campaign.target);
        setSelectedUrl(campaign.url);
        setSelectedPayment(campaign.payment);
        setSelectedPrize(campaign.prize);
        setSelectedForwhom(campaign.forWhom);
    }

    return (
        <div className={styles.card} onClick={handleSelectedPost}>
            <p className={styles.title}>{campaign.title}</p>
            <Image src={campaign.img} alt="" className={styles.img} width={1000} height={1000} />
            <p className={styles.text}>
                {campaign.text.length > 100
                    ? campaign.text.slice(0, 100) + '...'
                    : campaign.text}
            </p>
            <div className={styles.extra}>
                <p className={styles.name}>{campaign.name}</p>
                <p className={styles.date}>{campaign.startDate}</p>
            </div>
        </div>
    );
}

export default Campaign;