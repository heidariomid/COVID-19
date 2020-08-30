import React, {useEffect, useState} from 'react';
import {fetchCountries} from '../../api';
import Loader from '../Spinner';
import TBody from './TBody';
import THead from './THead';
import {Table, makeStyles, TableBody, TableContainer, TableHead, Paper} from '@material-ui/core';

const TableRank = () => {
	const [countries, setCountries] = useState([]);
	const useStyles = makeStyles({
		root: {
			width: '100%',
		},
		container: {
			maxHeight: 740,
		},
	});
	const classes = useStyles();
	useEffect(() => {
		const countries = async () => {
			const data = await fetchCountries();
			setCountries(data);
		};
		countries();
	}, []);
	if (!countries) {
		return <Loader />;
	}
	const totalCases = countries.sort((a, b) => (a.cases > b.cases ? -1 : 1)).map((data) => <TBody data={data} />);
	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<THead />
					</TableHead>
					<TableBody>{totalCases}</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default TableRank;
