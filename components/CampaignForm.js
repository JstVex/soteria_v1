import { useState } from 'react';
import styles from '../styles/DonationForm.module.css'

const CampaignForm = () => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [target, setTarget] = useState('');
    const [prize, setPrize] = useState('');
    const [forWhom, setForwhom] = useState('');
    const [newPost, setNewPost] = useState(true);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);


    const [payment, setPayment] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setPayment([...payment, value]);
        } else {
            setPayment(payment.filter((v) => v !== value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = { title, img, startDate, endDate, text, name, url, target, prize, forWhom, payment, newPost };

        const response = await fetch(`http://localhost:4008/campaigns`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();

        if (!response.ok) {
            setError(data.error);
            setEmptyFields(data.emptyFields)
        }
        if (response.ok) {
            setTitle('');
            setImg('');
            setStartDate('');
            setEndDate('');
            setName('');
            setText('');
            setUrl('');
            setTarget('');
            setPrize('');
            setForwhom('')
            setError(null);
            setPayment([]);
            setEmptyFields([]);
            console.log('New post added', data)
        }

    }

    return (
        <form className={styles.form_campaign} action="" onSubmit={handleSubmit}>
            <div className={styles.heading}>
                Campaigns
            </div>
            <div className={styles.form_flex}>
                <div className={styles.form_flex2}>
                    <label htmlFor="title_campaign" className={styles.label}>
                        Title:
                    </label>
                    <input id='title_campaign' type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={`${styles.input} ${emptyFields.includes('title') ? styles.error : ''}`} />
                </div>

                <div className={styles.form_flex2}>
                    <label htmlFor="image_campaign" className={styles.label2}>
                        Image:
                    </label>
                    <input id='image_campaign' type="text" onChange={(e) => setImg(e.target.value)} value={img} className={styles.input} />
                </div>
            </div>

            <div className={styles.form_flex}>
                <div className={styles.form_flex2}>
                    <label htmlFor="startdate_campaign" className={styles.label}>
                        Start date:
                    </label>
                    <input id='startdate_campaign' type="date" onChange={(e) => setStartDate(e.target.value)} value={startDate} className={styles.input} />
                </div>
                <div className={styles.form_flex2}>
                    <label htmlFor="enddate_campaign" className={styles.label2}>
                        End date:
                    </label>
                    <input id='enddate_campaign' type="date" onChange={(e) => setEndDate(e.target.value)} value={endDate} className={styles.input} />
                </div>
            </div>

            <div className={styles.form_flex}>
                <div className={styles.form_flex2}>
                    <label htmlFor="name_campaign" className={styles.label}>
                        Name:
                    </label>
                    <input id='name_campaign' type="text" onChange={(e) => setName(e.target.value)} value={name} className={styles.input} />
                </div>
                <div className={styles.form_flex2}>
                    <label htmlFor="link_campaign" className={styles.label2}>
                        Link/url:
                    </label>
                    <input id='link_campaign' type="url" onChange={(e) => setUrl(e.target.value)} value={url} className={`${styles.input} ${emptyFields.includes('url') ? `${styles.error}` : ''}`} />
                </div>
            </div>

            <label htmlFor="text_campaign">
                Text:
            </label>
            <textarea id='text_campaign' type="text" autoCorrect="off" spellCheck="false" onChange={(e) => setText(e.target.value)} value={text} className={`${styles.textarea} ${emptyFields.includes('text') ? `${styles.error}` : ''}`} />

            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Choose all available payment methods</legend>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="nugpay_campaign" name="payment" value="nugpay" onChange={handleCheckboxChange} />
                    <label htmlFor="nugpay_campaign">NUGPay</label>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="kpay_campaign" name="payment" value="kpay" onChange={handleCheckboxChange} />
                    <label htmlFor="kpay_campaign">Kpay</label>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="wavepay_campaign" name="payment" value="wavepay" onChange={handleCheckboxChange} />
                    <label htmlFor="wavepay_campaign">Wavepay</label>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="paypal_campaign" name="payment" value="paypal" onChange={handleCheckboxChange} />
                    <label htmlFor="paypal_campaign">Paypal</label>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="visa_campaign" name="payment" value="visa" onChange={handleCheckboxChange} />
                    <label htmlFor="visa_campaign">Visa</label>
                </div>
            </fieldset>

            <div className={styles.form_flex}>
                <div className={styles.form_flex2}>
                    <label htmlFor="prize_campaign" className={styles.label}>
                        Prize:
                    </label>
                    {/* <select name="location" id="location" onChange={(e) => setLocation(e.target.value)} className={`${styles.input} ${emptyFields.includes('location') ? `${styles.error}` : ''}`}>
                        <option value="kachin">Kachin</option>
                        <option value="kayah">Kayah</option>
                        <option value="kayin">Kayin</option>
                        <option value="chin">Chin</option>
                        <option value="mon">Mon</option>
                        <option value="rakhine">Rakhine</option>
                        <option value="shan">Shan</option>
                        <option value="ayeyarwady">Ayeyarwady</option>
                        <option value="bago">Bago</option>
                        <option value="magway">Magway</option>
                        <option value="mandalay">Mandalay</option>
                        <option value="sagaing">Sagaing</option>
                        <option value="tanintharyi">Tanintharyi</option>
                        <option value="yangon">Yangon</option>
                    </select> */}
                    <input type="text" id='prize_campaign' onChange={(e) => setPrize(e.target.value)} value={prize} placeholder="" />
                </div>
                <div className={styles.form_flex2}>
                    <label htmlFor="target_campaign" className={styles.label2}>
                        Target:
                    </label>
                    <input type="text" id='target_campaign' onChange={(e) => setTarget(e.target.value)} value={target} placeholder="Eg. 100,000 mmk or 10 $" />
                </div>
            </div>
            <div className={styles.form_flex}>
                <div className={styles.form_flex2}>
                    <label htmlFor="forWhom_campaign" className={styles.label2}>
                        For which organization or where:
                    </label>
                    <input type="text" id='forWhom_campaign' onChange={(e) => setForwhom(e.target.value)} value={forWhom} placeholder="" />
                </div>
            </div>

            <button className={styles.button}>
                submit
            </button>
            {error && <div className={styles.missing}> <span className={styles.missing_text}>{error}</span></div>}
        </form>
    );
}

export default CampaignForm;