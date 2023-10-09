import styles from "../styles/CampaignMain.module.css"
import Image from "next/image";

const CampaignImages = ({ campaign }) => {
    return (
        <Image src={campaign.img} alt="" className={styles.image} width={1000} height={1000} />
    );
}

export default CampaignImages;