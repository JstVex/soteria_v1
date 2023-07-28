import styles from "../../styles/CampaignMain.module.css"
import CampaignImages from "../../components/CampaignImages";
import Campaign from "../../components/Campaign";
import { useState } from "react";
import ModalCampaign from "../../components/ModalCampaign";

const Campaigns = ({ campaigns }) => {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedText, setSelectedText] = useState(null);
    const [selectedName, setSelectedName] = useState(null);
    const [selectedTarget, setSelectedTarget] = useState(null);
    const [selectedUrl, setSelectedUrl] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedPrize, setSelectedPrize] = useState(null);
    const [selectedForwhom, setSelectedForwhom] = useState(null);

    return (
        <div className={styles.container}>
            <div className={styles.first_section}>
                <div className={styles.texts}>
                    <p className={styles.heading}>
                        Many campaigns are available as well
                    </p>
                    <p className={styles.subtext}>
                        To persuade more people into donations many individuals and organizations have came up with campaigns which are basically donations but with prizes back. These are in the form of lotteries tickets for big prizes or gift cards or subscriptions or many more. more stuff here to put
                    </p>

                    <button className={styles.button}>
                        <a href="#explore"> Explore campaigns</a>
                    </button>
                </div>
                <div className={styles.imageSection}>
                    {campaigns && campaigns.map((campaign) => {
                        return <CampaignImages campaign={campaign} key={campaign._id} />
                    })}
                </div>
            </div>
            <div className={styles.second_section} id='explore'>
                <div className={styles.heading}>
                    <span className={styles.heading_content}>Campaigns</span>
                </div>
                <div className={styles.content}>
                    {campaigns && campaigns.map((campaign) => {
                        return <Campaign campaign={campaign} key={campaign._id} setSelectedTitle={setSelectedTitle}
                            setSelectedImg={setSelectedImg} setSelectedStartDate={setSelectedStartDate} setSelectedEndDate={setSelectedEndDate} setSelectedText={setSelectedText} setSelectedName={setSelectedName} setSelectedTarget={setSelectedTarget} setSelectedUrl={setSelectedUrl} setSelectedPayment={setSelectedPayment} setSelectedPrize={setSelectedPrize} setSelectedForwhom={setSelectedForwhom} />
                    })}
                </div>
            </div>
            {selectedTitle && <ModalCampaign setSelectedTitle={setSelectedTitle} selectedTitle={selectedTitle} selectedImg={selectedImg} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} selectedText={selectedText} selectedName={selectedName} selectedTarget={selectedTarget} selectedUrl={selectedUrl} selectedPayment={selectedPayment} selectedPrize={selectedPrize} selectedForwhom={selectedForwhom} />}
        </div >

    );
}


export async function getServerSideProps() {
    const res = await fetch(`${process.env.SERVER_URL}/campaigns`)
    const campaigns = await res.json()
    return { props: { campaigns } }
}

export default Campaigns;
