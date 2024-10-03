import React, {useContext, useMemo} from 'react';
import {TableContext} from '../TableContext';
import {ITableContext} from '../../../types/ITableContext';
import TableCell from './TableCell/TableCell';
import './Table.css';
const Table = () => {
	const {columns, data, search, loading} = useContext(
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
		<div style={{overflowX: 'auto'}}>
			<table
				style={{
					minWidth: '100%',
					borderCollapse: 'collapse'
				}}>
				<thead>
					<tr>
						{columns.map((v, i) => (
							<TableCell head key={i}>
								{v}
							</TableCell>
						))}
					</tr>
				</thead>
				<tbody>
					{filteredData.map((v, i) => (
						<tr key={i} className="hover-table-row">
							{v.map((value, index) => (
								<TableCell key={index + 'cell'}>
									{value}
								</TableCell>
							))}
						</tr>
					))}
				</tbody>
			</table>
			{loading && filteredData.length === 0
				? 'Loading...'
				: filteredData.length === 0
					? 'Not Found!'
					: ''}
		</div>
	);
};

export default Table;
