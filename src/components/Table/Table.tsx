import React, { useContext } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableBody from './TableBody';
import { TableContext } from './TableContext';
import { ITableContext } from '../../types/ITableContext';

const Table = () => {
	const {columns, data, skip, limit} = useContext(TableContext) as ITableContext;
	return (
		<table>
			<TableHead>
				<TableRow>
					{columns.map((v, i) => (
						<TableCell head key={i}>
							{v}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{data.slice(skip, skip + limit).map((v, i) => (
					<TableRow key={i}>
						{v.map((value, index) => (
							<TableCell key={index + 'cell'}>
								{value ?? ''}
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</table>
	);
};

export default Table;
