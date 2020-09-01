import React, {Component} from 'react';
import {Cards, Chart, CountrySearch, Map, CountryList} from './components';
import styles from './App.module.css';
import coronaImage from './images/corona.png';
import {fetchData, fetchCountries} from './api';
import {Card} from '@material-ui/core';
import 'leaflet/dist/leaflet.css';
export class App extends Component {
	state = {
		data: {},
		country: '',
		mapCenter: {lat: 34.8, lng: -40.5},
		casesType: 'cases',
		zoom: 3,
	};
	async componentDidMount() {
		const data = await fetchData();
		return this.setState({data});
	}
	countryHandler = async (country) => {
		const data = await fetchData(country);
		if (country) {
			const latLong = await fetchCountries(country);
			this.setState({mapCenter: latLong});
			this.setState({zoom: 5});
		}
		if (country === '') {
			this.setState({zoom: 2});
			this.setState({mapCenter: {lat: 34.8, lng: -40.5}});
		}
		return this.setState({data, country});
	};
	dataSettoMap = async (type) => {
		return this.setState({casesType: type});
	};

	render() {
		const {data, country} = this.state;
		return (
			<div className={styles.app}>
				<div className={styles.app_left}>
					<div className={styles.app_header}>
						<Card className={styles.date}>{new Date(data.updated).toDateString()}</Card>
						<img className={styles.imgage} src={coronaImage} alt="covid-19" />
						<CountrySearch countrySelect={this.countryHandler} />
					</div>
					<div className={styles.app_body}>
						<Cards data={data} dataSettoMap={this.dataSettoMap} />
						<Map data={data} country={country} center={this.state.mapCenter} zoom={this.state.zoom} casesType={this.state.casesType} />
					</div>
				</div>
				<div className={styles.app_right}>
					<CountryList />
					<Chart data={data} country={country} />
				</div>
			</div>
		);
	}
}

export default App;
