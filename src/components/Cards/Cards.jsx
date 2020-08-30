import React from 'react';
import styles from './Cards.module.css';
import Loader from '../Spinner';
import cx from 'classnames';
import CountUp from 'react-countup';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
const Cards = ({data}) => {
	const {cases, recovered, deaths, updated} = data;
	if (!cases) {
		return <Loader />;
	}
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom variant="h4">
							Infected
						</Typography>
						<Typography variant="h5">
							<CountUp start={10000} end={cases} duration={2.5} separator="," />
						</Typography>
						<Typography variant="body2">Number of active cases from COVID-19.</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom variant="h4">
							Recovered
						</Typography>
						<Typography variant="h5">
							<CountUp start={10000} end={recovered} duration={2.5} separator="," />
						</Typography>
						<Typography variant="body2">Number of recoveries from COVID-19.</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom variant="h4">
							Deaths
						</Typography>
						<Typography variant="h5">
							<CountUp start={10000} end={deaths} duration={1.5} separator="," />
						</Typography>
						<Typography variant="body2">Number of deaths caused by COVID-19.</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
