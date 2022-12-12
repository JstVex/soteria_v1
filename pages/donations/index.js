import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import Link from 'next/link';

const Donations = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoianN0LXZleCIsImEiOiJjbGJrOGN1YWkwMTY0M3BtaTk0MWd2aHlyIn0.Mv5ONmGWa14gNiJqEHPxXw';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(95.6);
    const [lat, setLat] = useState(20.4);
    const [zoom, setZoom] = useState(4.5);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [lng, lat],
            zoom: zoom
        });

        new mapboxgl.Marker()
            .setLngLat([97.491926, 26.020766])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>kachin</p>
                    <button><a href='http://localhost:3000/donations/kachin'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([96.199379, 16.871311])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>yangon</p>
                    <button><a href='http://localhost:3000/donations/yangon'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([97.9593, 16.9459])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>kayin</p>
                    <button><a href='http://localhost:3000/donations/kayin'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([97.374800891, 19.234085732])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>kayah</p>
                    <button><a href='http://localhost:3000/donations/kayah'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([93.581269, 22.389675])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>chin</p>
                    <button><a href='http://localhost:3000/donations/chin'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([97.6982, 16.3003])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>mon</p>
                    <button><a href='http://localhost:3000/donations/mon'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([93.5813, 20.1041])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>rakhine</p>
                    <button><a href='http://localhost:3000/donations/rakhine'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([98.1339, 22.0362])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>shan</p>
                    <button><a href='http://localhost:3000/donations/shan'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([96.0891, 21.9588])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>mandalay</p>
                    <button><a href='http://localhost:3000/donations/mandalay'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([96.4663, 17.8221])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>bago</p>
                    <button><a href='http://localhost:3000/donations/bago'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([94.9455, 20.1544])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>magway</p>
                    <button><a href='http://localhost:3000/donations/magway'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([95.1621, 22.9160])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>sagaing</p>
                    <button><a href='http://localhost:3000/donations/sagaing'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([95.2267, 17.0342])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>ayeyarwady</p>
                    <button><a href='http://localhost:3000/donations/ayeyarwady'>go</a></button>`
                )
            )
            .addTo(map.current);

        new mapboxgl.Marker()
            .setLngLat([99.0129, 12.4707])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                    `<p>tanintharyi</p>
                    <button><a href='http://localhost:3000/donations/tanintharyi'>go</a></button>`
                )
            )
            .addTo(map.current);
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });
    return (

        <div className="donations">
            <div ref={mapContainer} className="map-container" />
            <p>donations</p>
        </div>
    );
}

export default Donations;