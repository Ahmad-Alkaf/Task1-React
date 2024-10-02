import React, {useContext, useMemo} from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableBody from './TableBody';
import {TableContext} from './TableContext';
import {ITableContext} from '../../types/ITableContext';

const Table = () => {
	const {columns, data, skip, limit, search, loading} = useContext(
		TableContext
	) as ITableContext;
	const filteredData = useMemo(() => {
		return data.filter(
			v =>
				v.filter(value => value && value.toString().includes(search))
					.length > 0
		);
	}, [data, search]);
	return (
		<>
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
					{filteredData.map((v, i) => (
						<TableRow key={i}>
							{v.map((value, index) => (
								<TableCell key={index + 'cell'}>
									{value}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</table>
			{loading && filteredData.length === 0
				? 'Loading...'
				: filteredData.length === 0
					? 'Not Found!'
					: ''}
		</>
	);
};

export default Table;
