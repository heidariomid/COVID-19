import numeral from 'numeral';

export const lineChartData = (data) => {
	const buildChartData = (data, casesType) => {
		let chartData = [];
		let lastDataPoint;
		for (let date in data.cases) {
			if (lastDataPoint) {
				let newDataPoint = {
					x: date,
					y: data[casesType][date] - lastDataPoint,
				};
				chartData.push(newDataPoint);
			}
			lastDataPoint = data[casesType][date];
		}
		console.log(chartData);
		return chartData;
	};

	return {
		// labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		labels: '',

		// labels: data(({reportDate}) => reportDate),
		datasets: [
			{
				label: 'Infected',
				borderColor: 'grey',
				backGroundColor: 'rgba(70, 70, 70, 0.5)',
				fill: true,
				data: buildChartData(data, 'cases'),
			},
			{
				label: 'Recovered',
				borderColor: 'green',
				backgroundColor: 'rgba(0, 255, 0, 0.7)',
				fill: true,
				data: buildChartData(data, 'recovered'),
			},
			{
				label: 'Deaths',
				borderColor: 'red',
				backgroundColor: 'rgba(255, 0, 0, 0.5)',
				fill: true,
				data: buildChartData(data, 'deaths'),
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
				data: [data.cases, data.recovered, data.deaths],
			},
		],
	};
};
export const lineChartOptions = {
	legend: {
		display: false,
	},
	elements: {
		point: {
			radius: 0,
		},
	},
	maintainAspectRatio: false,
	tooltips: {
		mode: 'index',
		intersect: false,
		callbacks: {
			label: function (tooltipItem, data) {
				return numeral(tooltipItem.value).format('+0,0');
			},
		},
	},
	scales: {
		xAxes: [
			{
				type: 'time',
				time: {
					format: 'MM/DD/YY',
					tooltipFormat: 'll',
				},
			},
		],
		yAxes: [
			{
				gridLines: {
					display: false,
				},
				ticks: {
					// Include a dollar sign in the ticks
					callback: function (value, index, values) {
						return numeral(value).format('0a');
					},
				},
			},
		],
	},
};
export const barChartOptions = {
	legend: {display: false},
	title: {display: true},
};
