export const lineChartData = (dailyData) => {
	return {
		// labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		labels: dailyData.map(({date}) => date),
		// labels: dailyData(({reportDate}) => reportDate),
		datasets: [
			{
				label: 'Infected',
				borderColor: 'grey',
				backGroundColor: 'rgba(70, 70, 70, 0.8)',
				fill: true,
				fillColor: 'rgba(70, 70, 70, 0.8)',
				strokeColor: 'rgba(70, 70, 70, 0.8)',
				pointColor: 'rgba(220,220,220,1)',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(220,220,220,1)',
				data: dailyData.map(({confirmed}) => confirmed),
			},
			{
				label: 'Deaths',
				borderColor: 'red',
				backgroundColor: 'rgba(255, 0, 0, 0.8)',
				fill: true,
				fillColor: 'rgba(255, 0, 0,0.2)',
				strokeColor: 'rgba(255, 0, 0,1)',
				pointColor: 'rgba(151,187,205,1)',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(151,187,205,1)',
				data: dailyData.map(({deaths}) => deaths),
			},
		],
	};
};
export const barChartData = (data) => {
	return {
		// labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		labels: ['Infected', 'Recovered', 'Deaths'],
		// labels: data(({reportDate}) => reportDate),
		datasets: [
			{
				label: 'People',
				backgroundColor: ['rgba(70, 70, 70, 0.8)', 'rgba(0, 255, 0, 0.7)', 'rgba(255, 0, 0, 0.8)'],
				data: [data.confirmed.value, data.recovered.value, data.deaths.value],
			},
		],
	};
};

export const barChartOptions = {
	legend: {display: false},
	title: {display: true},
};
