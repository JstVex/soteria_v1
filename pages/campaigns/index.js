import styles from "../../styles/CampaignMain.module.css"
import CampaignImages from "../../components/CampaignImages";
import Campaign from "../../components/Campaign";
import { useEffect, useState, useRef } from "react";
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

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.first_section}>
                <div className={styles.texts}>
                    <p className={styles.heading}>
                        Many campaigns are available as well
                    </p>
                    <p className={styles.subtext}>
                        To persuade more people into donations, many individuals and organizations have came up with campaigns which are basically donations but with prizes. These are in the form of lotteries tickets for big prizes or gift cards or subscriptions or many more.
                    </p>

                    <button className={styles.button}>
                        <div onClick={() => scrollToSection('explore')}>
                            Explore campaigns
                        </div>
                    </button>
                </div>

                <div className={styles.imageSection} style={{ width: `${campaigns.length * 200}%` }}>
                    {campaigns.map((campaign, index) => {
                        return (
                            <CampaignImages campaign={campaign} key={campaign._id + index} />
                        );
                    })}
                    {/* Duplicate the images multiple times to ensure an infinite loop */}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate1" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate2" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate3" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate4" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate5" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate6" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate7" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate8" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate9" + index} />
                    ))}
                    {campaigns.map((campaign, index) => (
                        <CampaignImages campaign={campaign} key={campaign._id + "duplicate10" + index} />
                    ))}
                </div>
            </div>
            <div className={styles.second_section} id='explore'>
                <div className={styles.heading}>
                    <span className={styles.heading_content}>
                        Campaigns
                    </span>
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
    const res = await fetch(`http://localhost:4004/campaigns`)
    const campaigns = await res.json()
    return { props: { campaigns } }
}

export default Campaigns;
