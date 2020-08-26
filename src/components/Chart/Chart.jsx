import React, {useState, useEffect} from 'react';
import styles from './Chart.module.css';
// import cx from 'classnames';
import {fetchDailyData} from '../../api';
import {lineChartData, barChartData, barChartOptions} from './lineChartData';
import {Line, Bar} from 'react-chartjs-2';
const Chart = ({data, country}) => {
	const [dailyData, setDailyData] = useState([]);
	useEffect(() => {
		const daily = async () => {
			const data = await fetchDailyData();
			setDailyData(data);
		};
		daily();
	}, []);

	const lineChart = dailyData.length ? <Line data={lineChartData(dailyData)} /> : null;
	const barChart = data.confirmed ? <Bar data={barChartData(data)} options={barChartOptions} /> : null;
	const countryChosen = country ? barChart : lineChart;
	return <div className={styles.container}>{countryChosen}</div>;
};

export default Chart;
