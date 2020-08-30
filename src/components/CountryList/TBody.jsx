import React from 'react';
import {TableRow, TableCell} from '@material-ui/core';

const TBody = ({data}) => {
	const {cases, country, flag, todayCases} = data;

	return (
		<TableRow hover role="checkbox" tabIndex={-1}>
			<TableCell align="center">
				<img style={{maxWidth: 70}} src={flag} alt="cv" />
			</TableCell>
			<TableCell align="center" style={{maxWidth: 100}}>
				{country}
			</TableCell>
			<TableCell align="center" style={{maxWidth: 110}}>
				{todayCases.toLocaleString('en-US')}
			</TableCell>
			<TableCell align="center" style={{maxWidth: 100}}>
				{cases.toLocaleString('en-US')}
			</TableCell>
		</TableRow>
	);
};

export default TBody;
