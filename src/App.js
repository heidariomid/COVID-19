import React, {Component} from 'react';
import {Cards, Chart, Country} from './components';
import styles from './App.module.css';
import coronaImage from './images/corona.png';
import {fetchData} from './api';
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
			<div className={styles.container}>
				<img className={styles.imgage} src={coronaImage} alt="covid-19" />
				<Cards data={data} />
				<Country countrySelect={this.countryHandler} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
