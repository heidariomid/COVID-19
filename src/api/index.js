import Axios from './Axios';

const axios = new Axios();

const oldUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
	try {
		if (country) {
			const {
				data: {cases, recovered, updated, deaths},
			} = await axios.get(`countries/${country}`);
			return {cases, recovered, updated, deaths};
		}
		const {
			data: {cases, recovered, updated, deaths},
		} = await axios.get('all');
		return {cases, recovered, updated, deaths};
	} catch (error) {
		console.log(error.message);
	}
};

export const fetchDailyData = async () => {
	try {
		const {
			data: {cases, recovered, deaths},
		} = await axios.get('historical/all?lastdays=120');
		return {cases, recovered, deaths};
	} catch (error) {
		console.log(error.message);
	}
};

export const fetchCountries = async () => {
	try {
		const {data} = await axios.get('countries');
		const countries = data.map(({country, cases, todayCases, countryInfo: {iso2, flag}}) => ({country, iso2, cases, todayCases, flag}));
		return countries;
	} catch (error) {
		console.log(error.message);
	}
};
