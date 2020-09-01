import React, {useState, useEffect} from 'react';
import styles from './Country.module.css';
import {fetchCountries} from '../../api';
import globalImg from '../../images/global.png';
import {NativeSelect, FormControl} from '@material-ui/core';

const Country = ({countrySelect}) => {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		const countries = async () => {
			const data = await fetchCountries();
			setCountries(data);
		};
		countries();
	}, []);
	const CountryName = countries.map((countryName, i) => (
		<option key={i} value={countryName.country}>
			{countryName.country}
		</option>
	));
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect variant="outlined" defaultValue="" onChange={(e) => countrySelect(e.target.value)}>
				<option value="">
					Global
					{/* <img src={globalImg} alt="global" /> */}
				</option>
				{CountryName}
			</NativeSelect>
		</FormControl>
	);
};

export default Country;