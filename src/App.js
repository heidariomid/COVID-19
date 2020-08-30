import React, {Component} from 'react';
import {Cards, Chart, CountrySearch, Map, CountryList} from './components';
import styles from './App.module.css';
import coronaImage from './images/corona.png';
import {fetchData} from './api';
import {Card} from '@material-ui/core';
export class App extends Component {
	state = {
		data: {},
		country: '',
	};
	async componentDidMount() {
		const data = await fetchData();
		return this.setState({data});
	}
	countryHandler = async (country) => {
		const data = await fetchData(country);
		return this.setState({data, country});
	};

	render() {
		const {data, country} = this.state;
		return (
			<div className={styles.app}>
				<div className={styles.app_left}>
					<div className={styles.app_header}>
						<Card className={styles.dateUpdate}>{new Date(data.updated).toDateString()}</Card>
						<img className={styles.imgage} src={coronaImage} alt="covid-19" />
						<CountrySearch countrySelect={this.countryHandler} />
					</div>
					<div className={styles.app_body}>
						<Cards data={data} />
						<Chart data={data} country={country} />
						<Map />
					</div>
				</div>
				<div className={styles.app_right}>
					<CountryList />
				</div>
			</div>
		);
	}
}

export default App;
