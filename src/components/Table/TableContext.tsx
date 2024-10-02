import React, {createContext, PropsWithChildren, useState} from 'react';
import {ITableContext} from '../../types/ITableContext';

const TableContext = createContext<ITableContext | null>(null);

const TableContextProvider = ({children}: PropsWithChildren) => {
	const [limit, setLimit] = useState<number>(5);
	const [skip, setSkip] = useState<number>(0);
	const [search, setSearch] = useState<string>('');
	const [data, setData] = useState<
		(string | number | boolean | undefined | null)[][]
	>([]);
	const [columns, setColumns] = useState<string[]>([]);
	return (
		<TableContext.Provider
			value={{
				limit,
				setLimit,
				skip,
				setSkip,
				search,
				setSearch,
				data,
				setData,
				columns,
				setColumns
			}}>
			{children}
		</TableContext.Provider>
	);
};

export {TableContext, TableContextProvider};
