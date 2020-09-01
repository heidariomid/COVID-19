import React, {useEffect, useState} from 'react';
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet';
import {fetchCountries} from '../../api';
import ShowCountryOnMap from './ShowCountryOnMap';
import styles from './Map.module.css';

const MapShow = ({zoom, center, casesType}) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const daily = async () => {
			const data = await fetchCountries();
			setCountries(data);
		};
		daily();
	}, []);
	const countryOnMap = countries.map((countryName, i) => <ShowCountryOnMap country={countryName} casesType={casesType} />);
	return (
		<div className={styles.map}>
			<LeafletMap className={styles.leafletContainer} center={center} zoom={zoom}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
				{countryOnMap}
			</LeafletMap>
		</div>
	);
};

export default MapShow;
