import { useState } from 'react';
import styles from '../styles/DonationMain.module.css'

const DonationForm = () => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [date, setDate] = useState('');
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [location, setLocation] = useState('yangon');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = { title, img, date, text, name, url, location };

        const response = await fetch(`https://soteria-backend-alc9.onrender.com/donations`, {
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
            setDate('');
            setName('');
            setText('');
            setUrl('');
            setLocation('');
            setError(null);
            setEmptyFields([]);
            console.log('New post added', data)
        }

    }

    return (
        <form className={styles.form} action="" onSubmit={handleSubmit}>
            <label htmlFor="title">
                Title:
            </label>
            <input id='title' type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFields.includes('text') ? 'error' : ''} />
            <label htmlFor="image">
                Image:
            </label>
            <input id='image' type="text" onChange={(e) => setImg(e.target.value)} value={img} className={emptyFields.includes('text') ? `${styles.error}` : ''} />
            <label htmlFor="date">
                Date:
            </label>
            <input id='date' type="text" onChange={(e) => setDate(e.target.value)} value={date} className={emptyFields.includes('text') ? `${styles.error}` : ''} />
            <label htmlFor="text">
                Text:
            </label>
            <input id='text' type="text" onChange={(e) => setText(e.target.value)} value={text} className={emptyFields.includes('text') ? `${styles.error}` : ''} />
            <label htmlFor="name">
                Name:
            </label>
            <input id='name' type="text" onChange={(e) => setName(e.target.value)} value={name} className={emptyFields.includes('text') ? `${styles.error}` : ''} />
            <label htmlFor="link">
                Link/url:
            </label>
            <input id='link' type="url" onChange={(e) => setUrl(e.target.value)} value={url} className={emptyFields.includes('text') ? `${styles.error}` : ''} />
            <label htmlFor="location">
                Choose location:
            </label>
            <select name="location" id="location" onChange={(e) => setLocation(e.target.value)} className={emptyFields.includes('text') ? `${styles.error}` : ''}>
                <option value="yangon">Yangon</option>
                <option value="mandalay">Mandalay</option>
            </select>
            <button>
                submit
            </button>
            {error && <div>{error}</div>}
        </form>
    );
}

export default DonationForm;