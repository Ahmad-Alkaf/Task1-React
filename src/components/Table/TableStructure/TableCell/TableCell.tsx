import React, {PropsWithChildren} from 'react';
import './TableCell.css';
const TableCell = ({
	children,
	head = false
}: PropsWithChildren<{head?: boolean}>) => {
	function isEmpty(v: any) {
		return (
			typeof v === 'undefined' ||
			(typeof v === 'string' && v.trim() === '') ||
			v === null
		);
	}

	return (
		<>
			{head ? (
				<th className="table-cell-header">
					{isEmpty(children) ? 'N/A' : children}
				</th>
			) : (
				<td className="table-cell-data">
					{isEmpty(children) ? 'N/A' : children}
				</td>
			)}
		</>
	);
};

export default TableCell;
