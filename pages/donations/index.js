import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import Link from 'next/link';
import styles from '../../styles/DonationMain.module.css'
import ImageSlider from '../../components/ImageSlider';
import DonationForm from '../../components/DonationForm';

const Donations = () => {
    // mapboxgl.accessToken = 'pk.eyJ1IjoianN0LXZleCIsImEiOiJjbGJrOGN1YWkwMTY0M3BtaTk0MWd2aHlyIn0.Mv5ONmGWa14gNiJqEHPxXw';
    // const mapContainer = useRef(null);
    // const map = useRef(null);
    // const [lng, setLng] = useState(95.6);
    // const [lat, setLat] = useState(20.4);
    // const [zoom, setZoom] = useState(4.5);

    // useEffect(() => {
    //     if (map.current) return;
    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/light-v11',
    //         center: [lng, lat],
    //         zoom: zoom
    //     });

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([97.491926, 26.020766])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>kachin</p>
    //                 <button><a href='http://localhost:3000/donations/kachin'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([96.199379, 16.871311])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>yangon</p>
    //                 <button><a href='http://localhost:3000/donations/yangon'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([97.9593, 16.9459])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>kayin</p>
    //                 <button><a href='http://localhost:3000/donations/kayin'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([97.374800891, 19.234085732])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>kayah</p>
    //                 <button><a href='http://localhost:3000/donations/kayah'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([93.581269, 22.389675])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>chin</p>
    //                 <button><a href='http://localhost:3000/donations/chin'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([97.6982, 16.3003])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>mon</p>
    //                 <button><a href='http://localhost:3000/donations/mon'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([93.5813, 20.1041])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>rakhine</p>
    //                 <button><a href='http://localhost:3000/donations/rakhine'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([98.1339, 22.0362])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>shan</p>
    //                 <button><a href='http://localhost:3000/donations/shan'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([96.0891, 21.9588])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>mandalay</p>
    //                 <button><a href='http://localhost:3000/donations/mandalay'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([96.4663, 17.8221])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>bago</p>
    //                 <button><a href='http://localhost:3000/donations/bago'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([94.9455, 20.1544])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>magway</p>
    //                 <button><a href='http://localhost:3000/donations/magway'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([95.1621, 22.9160])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>sagaing</p>
    //                 <button><a href='http://localhost:3000/donations/sagaing'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([95.2267, 17.0342])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>ayeyarwady</p>
    //                 <button><a href='http://localhost:3000/donations/ayeyarwady'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);

    //     new mapboxgl.Marker({ color: 'orange' })
    //         .setLngLat([99.0129, 12.4707])
    //         .setPopup(
    //             new mapboxgl.Popup({ offset: 25 }).setHTML(
    //                 `<p>tanintharyi</p>
    //                 <button><a href='http://localhost:3000/donations/tanintharyi'>go</a></button>`
    //             )
    //         )
    //         .addTo(map.current);
    // });

    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize
    //     map.current.on('move', () => {
    //         setLng(map.current.getCenter().lng.toFixed(4));
    //         setLat(map.current.getCenter().lat.toFixed(4));
    //         setZoom(map.current.getZoom().toFixed(2));
    //     });
    // });
    return (
        <div className={styles.container}>

            <div className={styles.first_section}>
                <div className={styles.texts}>
                    <p className={styles.heading}>
                        Donations are essential for us
                    </p>
                    <p className={styles.subtext}>
                        Using apps and visiting websites and watching videos are nice but donations are important as well. Lots of help is needed in many areas throughout the country and if we cant help in person we must help as much as we can by doantion any amount we can every now and then.
                    </p>
                </div>
                <ImageSlider />
            </div>
            <div className={styles.second_section_ammo}>
                <div className={styles.wrap}>
                    <div className={styles.title}>
                        Weaponries, ammonitions and supplies
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores numquam alias obcaecati expedita? Reprehenderit culpa, autem minus numquam doloribus beatae modi id at amet, dolore, sed eius magnam nesciunt?
                        Esse a fuga ex repudiandae omnis animi sed nemo officiis voluptatem eligendi ducimus, quisquam nam, ipsam expedita at debitis eos beatae deserunt atque obcaecati pariatur dolor vero aperiam architecto! Dolore.
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quas, non voluptas blanditiis dolores deleniti unde facere explicabo, maiores neque ratione architecto laborum quia quam minus reprehenderit. Beatae, blanditiis minus.
                    </div>
                </div>
                <img className={styles.img} src="https://dsm01pap007files.storage.live.com/y4m-6kBajalvnI1jPcL0DBwkc_3KWwyVvnNZG2lpdsbUzrWr3NpEBHmoogY9CZHNGJC1JWVw8DLxnt4GAtj9klnLem3JbBvEMDtcEnvV2j5BY02Yvx-tP_ikNmhIoeKGCP3DVbNziKsFe1WWXWbrTHNgq0SKV4_DiYtpiW0eAObDetf7FqrC40vKvns0yNeY7AC?width=3072&height=3072&cropmode=none" alt="" />
            </div>

            <div className={styles.second_section_refugee}>
                <img className={styles.img} src="https://dsm01pap007files.storage.live.com/y4m-6kBajalvnI1jPcL0DBwkc_3KWwyVvnNZG2lpdsbUzrWr3NpEBHmoogY9CZHNGJC1JWVw8DLxnt4GAtj9klnLem3JbBvEMDtcEnvV2j5BY02Yvx-tP_ikNmhIoeKGCP3DVbNziKsFe1WWXWbrTHNgq0SKV4_DiYtpiW0eAObDetf7FqrC40vKvns0yNeY7AC?width=3072&height=3072&cropmode=none" alt="" />
                <div className={styles.wrap2}>
                    <div className={styles.title}>
                        Food, shelter, accessories for refugees
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores numquam alias obcaecati expedita? Reprehenderit culpa, autem minus numquam doloribus beatae modi id at amet, dolore, sed eius magnam nesciunt?
                        Esse a fuga ex repudiandae omnis animi sed nemo officiis voluptatem eligendi ducimus, quisquam nam, ipsam expedita at debitis eos beatae deserunt atque obcaecati pariatur dolor vero aperiam architecto! Dolore.
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quas, non voluptas blanditiis dolores deleniti unde facere explicabo, maiores neque ratione architecto laborum quia quam minus reprehenderit. Beatae, blanditiis minus.
                    </div>
                </div>
            </div>

            <div className={styles.second_section_cdm}>
                <div className={styles.wrap}>
                    <div className={styles.title}>
                        Civil Disobedience movements
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores numquam alias obcaecati expedita? Reprehenderit culpa, autem minus numquam doloribus beatae modi id at amet, dolore, sed eius magnam nesciunt?
                        Esse a fuga ex repudiandae omnis animi sed nemo officiis voluptatem eligendi ducimus, quisquam nam, ipsam expedita at debitis eos beatae deserunt atque obcaecati pariatur dolor vero aperiam architecto! Dolore.
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quas, non voluptas blanditiis dolores deleniti unde facere explicabo, maiores neque ratione architecto laborum quia quam minus reprehenderit. Beatae, blanditiis minus.
                    </div>
                </div>
                <img className={styles.img} src="https://dsm01pap007files.storage.live.com/y4m-6kBajalvnI1jPcL0DBwkc_3KWwyVvnNZG2lpdsbUzrWr3NpEBHmoogY9CZHNGJC1JWVw8DLxnt4GAtj9klnLem3JbBvEMDtcEnvV2j5BY02Yvx-tP_ikNmhIoeKGCP3DVbNziKsFe1WWXWbrTHNgq0SKV4_DiYtpiW0eAObDetf7FqrC40vKvns0yNeY7AC?width=3072&height=3072&cropmode=none" alt="" />
            </div>

            <div className={styles.third_section}>
                <div className={styles.flex}>
                    <div className={styles.card}>
                        <div className={styles.number}>
                            <span className={styles.amount}>2000</span>
                            <span className={styles.unit}>mil</span>
                        </div>
                        <div className={styles.para}>
                            <span className={styles.first_letter}>Ammo</span> ipsum, dolor sit amet consectetur adipisicing elit. Non accusamus ea iusto itaque dolor officia voluptatem quaerat fugiat. Quae nisi magni consequatur illo temporibus commodi doloribus, dolorum iusto nostrum ab!
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.number}>
                            <span className={styles.amount}>4000</span>
                            <span className={styles.unit}>plus</span>
                        </div>
                        <div className={styles.para}>
                            <span className={styles.first_letter}>Casualities</span> ipsum, dolor sit amet consectetur adipisicing elit. Non accusamus ea iusto itaque dolor officia voluptatem quaerat fugiat. Quae nisi magni consequatur illo temporibus commodi doloribus, dolorum iusto nostrum ab!
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.number}>
                            <span className={styles.amount}>3000</span>
                            <span className={styles.unit}></span>
                        </div>
                        <div className={styles.para}>
                            <span className={styles.first_letter}>Refugees</span> ipsum, dolor sit amet consectetur adipisicing elit. Non accusamus ea iusto itaque dolor officia voluptatem quaerat fugiat. Quae nisi magni consequatur illo temporibus commodi doloribus, dolorum iusto nostrum ab!
                        </div>
                    </div>
                </div>
            </div>
            {/* <div ref={mapContainer} className="map-container" /> */}
            <div className={styles.forth_section}>
                <div className={styles.flex2}>
                    <div className={styles.add}>
                        <div className={styles.add_heading}>
                            Help us add more
                        </div>
                        <div className={styles.add_text}>
                            You can also help by adding any related donation posts here. This will be processed and added if it is true.
                        </div>
                    </div>
                    <DonationForm />
                </div>
            </div>


        </div>
    );
}

export default Donations;