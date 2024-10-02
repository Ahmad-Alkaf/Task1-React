import React, {PropsWithChildren} from 'react';

const TableHead = ({children}: PropsWithChildren) => {
	return <thead >{children}</thead>;
};

export default TableHead;
