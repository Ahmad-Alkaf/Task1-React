import React, {PropsWithChildren} from 'react';

const TableRow = ({children}: PropsWithChildren) => {
	return <tr>{children}</tr>;
};

export default TableRow;
