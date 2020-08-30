import React from 'react';
import {TableRow, TableCell} from '@material-ui/core';

const THead = () => {
	const columns = [
		{id: 'flag', label: 'Flag', maxWidth: 70},
		{id: 'country', label: 'Country', maxWidth: 100},
		{
			id: 'today',
			label: 'Today',
			maxWidth: 100,
		},
		{
			id: 'total',
			label: 'Total',
			maxWidth: 100,
		},
	];
	return (
		<TableRow>
			{columns.map((column) => (
				<TableCell key={column.id} align="center">
					{column.label}
				</TableCell>
			))}
		</TableRow>
	);
};

export default THead;
