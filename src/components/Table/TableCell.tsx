import React, {PropsWithChildren} from 'react';

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
				<th style={{textTransform: 'uppercase'}}>
					{isEmpty(children) ? 'N/A' : children}
				</th>
			) : (
				<td>{isEmpty(children) ? 'N/A' : children}</td>
			)}
		</>
	);
};

export default TableCell;
