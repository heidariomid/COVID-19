import React, {useEffect, useState} from 'react';
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet';
import {fetchDailyData} from '../../api';
import styles from './Map.module.css';
import showDataOnMap from './mapData';
const MapShow = ({data, country, zoom, center}) => {
	const [dailyData, setDailyData] = useState({});
	useEffect(() => {
		const daily = async () => {
			const data = await fetchDailyData();
			setDailyData(data);
		};
		daily();
	}, []);
	return (
		<div className={styles.map}>
			<LeafletMap className={styles.leafletContainer} center={center} zoom={zoom}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
				{/* {showDataOnMap(dailyData)} */}
			</LeafletMap>
		</div>
	);
};

export default MapShow;
