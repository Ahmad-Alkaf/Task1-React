import React, {createContext, PropsWithChildren, useState} from 'react';
import {Filter, ITableContext} from '../../types/ITableContext';

const TableContext = createContext<ITableContext | null>(null);

const TableContextProvider = ({children}: PropsWithChildren) => {
	const [limit, setLimit] = useState<number>(5);
	const [skip, setSkip] = useState<number>(0);
	const [search, setSearch] = useState<string>('');
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<
		(string | number | boolean | undefined | null)[][]
	>([]);

	const [filter, setFilter] = useState<Filter>({property: '', value: ''});
	const [columns, setColumns] = useState<string[]>([]);
	return (
		<TableContext.Provider
			value={{
				limit,
				setLimit,
				skip,
				setSkip,
				total,
				setTotal,
				search,
				setSearch,
				data,
				setData,
				columns,
				setColumns,
				loading,
				setLoading,
				filter,
				setFilter
			}}>
			{children}
		</TableContext.Provider>
	);
};

export {TableContext, TableContextProvider};
