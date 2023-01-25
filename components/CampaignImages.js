import styles from "../styles/CampaignMain.module.css"

const CampaignImages = ({ campaign }) => {
    return (
        <img src={campaign.img} alt="" className={styles.image} />
    );
}

export default CampaignImages;