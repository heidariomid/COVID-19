import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
	let setUrlBaseCountrySelect = url;
	if (country) {
		setUrlBaseCountrySelect = `${setUrlBaseCountrySelect}/countries/${country}`;
	}
	try {
		const {
			data: {confirmed, recovered, lastUpdate, deaths},
		} = await axios.get(setUrlBaseCountrySelect);
		return {confirmed, recovered, lastUpdate, deaths};
	} catch (error) {
		console.log(error.message);
	}
};

export const fetchDailyData = async () => {
	try {
		const {data} = await axios.get(`${url}/daily`);
		const modifiedData = data.map((fetchedData) => ({
			confirmed: fetchedData.confirmed.total,
			deaths: fetchedData.deaths.total,
			date: fetchedData.reportDate,
		}));
		return modifiedData;
	} catch (error) {
		console.log(error.message);
	}
};

export const fetchCountries = async () => {
	try {
		const {data} = await axios.get(`${url}/countries`);
		const modifiedData = data.countries.map(({name}) => name);
		return modifiedData;
	} catch (error) {
		console.log(error.message);
	}
};
