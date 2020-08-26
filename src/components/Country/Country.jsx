import React, {useState, useEffect} from 'react';
import styles from './Country.module.css';
import cx from 'classnames';
import {fetchCountries} from '../../api';
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
		<option key={i} value={countryName}>
			{countryName}
		</option>
	));
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue="" onChange={(e) => countrySelect(e.target.value)}>
				<option value="Global">Global</option>
				{CountryName}
			</NativeSelect>
		</FormControl>
	);
};

export default Country;
