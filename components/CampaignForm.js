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
    const [payment, setPayment] = useState([]);
    const [newPost, setNewPost] = useState(true);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        setImagePreview(file);
        if (file) {
            setImg(file);
        }
    };

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

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('startDate', startDate);
            formData.append('endDate', endDate);
            formData.append('text', text);
            formData.append('name', name);
            formData.append('url', url);
            formData.append('target', target);
            formData.append('prize', prize);
            formData.append('forWhom', forWhom);
            formData.append('payment', payment);
            formData.append('newPost', newPost);

            // if (img) {
            formData.append('img', img);
            // }

            const response = await fetch(`http://localhost:4008/campaigns`, {
                method: 'POST',
                body: formData
            })
            const data = await response.json();

            // if (!response.ok) {
            //     setError(data.error);
            //     setEmptyFields(data.emptyFields)
            // }
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
                setImagePreview(null);
                console.log('New post added', data)
            }
        } catch (error) {
            console.error('Error creating a campaign post', error)
        }
    }

    return (
        <form className={styles.form_campaign} encType="multipart/form-data" onSubmit={handleSubmit}>
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

                <div className={styles.form_flex_image}>
                    <div>
                        <label htmlFor="img_campaign" className={styles.label2}>
                            Image:
                        </label>
                        <div className={styles.image_wrap}>
                            <label htmlFor="img_campaign" className={styles.image_label}>
                                Select
                            </label>
                            <input
                                id="img_campaign"
                                type="file"
                                className={styles.image_input}
                                name="img"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    {imagePreview && (
                        <img
                            src={URL.createObjectURL(imagePreview)}
                            alt="Image Preview"
                            className={styles.image_preview}
                        />
                    )}
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
                    <input type="text" id='prize_campaign' onChange={(e) => setPrize(e.target.value)} value={prize} placeholder="" />
                </div>
                <div className={styles.form_flex2}>
                    <label htmlFor="target_campaign" className={styles.label2}>
                        Target:
                    </label>
                    <input type="text" id='target_campaign' onChange={(e) => setTarget(e.target.value)} value={target} placeholder="Eg. 100,000 mmk or 10 $" />
                </div>
            </div >

            <button button className={styles.button} >
                submit
            </button >
            {error && <div className={styles.missing}> <span className={styles.missing_text}>{error}</span></div>}
        </form >
    );
}

export default CampaignForm;