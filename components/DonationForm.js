import { useState } from 'react';
import styles from '../styles/DonationForm.module.css'

const DonationForm = () => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [target, setTarget] = useState('');
    const [location, setLocation] = useState('');
    const [newPost, setNewPost] = useState(true);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const [payment, setPayment] = useState([]);
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
            formData.append('location', location);
            formData.append('payment', payment);
            formData.append('newPost', newPost);

            if (img) {
                formData.append('img', img);
            }

            const response = await fetch(`http://localhost:4008/donations`, {
                method: 'POST',
                body: formData
            });

            // if (!response.ok) {
            //     setError(data.error);
            //     setEmptyFields(data.emptyFields)
            // }

            if (response.ok) {
                const data = await response.json();
                setTitle('');
                setImg('');
                setStartDate('');
                setEndDate('');
                setName('');
                setText('');
                setUrl('');
                setTarget('');
                setLocation('');
                setError(null);
                setPayment([]);
                setEmptyFields([]);
                setImagePreview(null);
                console.log('New post added', data)
            }
        } catch (error) {
            console.error('Error creating a donation post', error)
        }
    }

    return (
        <form className={styles.form} encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className={styles.heading}>
                Donations
            </div>
            <div className={styles.form_flex}>
                <div className={styles.form_flex2}>
                    <label htmlFor="title" className={styles.label}>
                        Title:
                    </label>
                    <input name='title' id='title' type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={`${styles.input} ${emptyFields.includes('title') ? styles.error : ''}`} />
                </div>

                <div className={styles.form_flex_image}>
                    <div>


                        <label htmlFor="img" className={styles.label2}>
                            Image:
                        </label>
                        <div className={styles.image_wrap}>
                            <label htmlFor="img" className={styles.image_label}>
                                Select
                            </label>
                            <input
                                id="img"
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
                    <label htmlFor="startdate" className={styles.label}>
                        Start date:
                    </label>
                    <input name='startDate' id='startdate' type="date" onChange={(e) => setStartDate(e.target.value)} value={startDate} className={styles.input} />
                </div>
                <div className={styles.form_flex2}>
                    <label htmlFor="enddate" className={styles.label2}>
                        End date:
                    </label>
                    <input name='endDate' id='enddate' type="date" onChange={(e) => setEndDate(e.target.value)} value={endDate} className={styles.input} />
                </div>
            </div>

            <div className={styles.form_flex}>
                <div className={styles.form_flex2}>
                    <label htmlFor="name" className={styles.label}>
                        Name:
                    </label>
                    <input name='name' id='name' type="text" onChange={(e) => setName(e.target.value)} value={name} className={styles.input} />
                </div>
                <div className={styles.form_flex2}>
                    <label htmlFor="link" className={styles.label2}>
                        Link/url:
                    </label>
                    <input name='url' id='link' type="url" onChange={(e) => setUrl(e.target.value)} value={url} className={`${styles.input} ${emptyFields.includes('url') ? `${styles.error}` : ''}`} />
                </div>
            </div>

            <label htmlFor="text">
                Text:
            </label>
            <textarea name='text' id='text' type="text" autoCorrect="off" spellCheck="false" onChange={(e) => setText(e.target.value)} value={text} className={`${styles.textarea} ${emptyFields.includes('text') ? `${styles.error}` : ''}`} />

            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Choose all available payment methods</legend>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="nugpay" name="payment" value="nugpay" onChange={handleCheckboxChange} />
                    <label htmlFor="nugpay">NUGPay</label>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="kpay" name="payment" value="kpay" onChange={handleCheckboxChange} />
                    <label htmlFor="kpay">Kpay</label>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="wavepay" name="payment" value="wavepay" onChange={handleCheckboxChange} />
                    <label htmlFor="wavepay">Wavepay</label>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="paypal" name="payment" value="paypal" onChange={handleCheckboxChange} />
                    <label htmlFor="paypal">Paypal</label>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" id="visa" name="payment" value="visa" onChange={handleCheckboxChange} />
                    <label htmlFor="visa">Visa</label>
                </div>
            </fieldset>

            <div className={styles.form_flex}>
                <div className={styles.form_flex2}>
                    <label htmlFor="location" className={styles.label}>
                        Choose location:
                    </label>
                    <select name="location" id="location" onChange={(e) => setLocation(e.target.value)} className={`${styles.input} ${emptyFields.includes('location') ? `${styles.error}` : ''}`}>
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
                    </select>
                </div>
                <div className={styles.form_flex2}>
                    <label htmlFor="target" className={styles.label2}>
                        Target:
                    </label>
                    <input name='target' type="text" id='target' onChange={(e) => setTarget(e.target.value)} value={target} placeholder="Eg. 100,000 mmk or 10 $" />
                </div>
            </div>

            <button className={styles.button}>
                submit
            </button>
            {error && <div className={styles.missing}> <span className={styles.missing_text}>{error}</span></div>}
        </form >
    );
}

export default DonationForm;