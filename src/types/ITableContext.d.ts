export interface ITableContext {
	columns: string[];
	setColumns: React.Dispatch<ITableContext['columns']>;
	limit: number;
	setLimit: React.Dispatch<ITableContext['limit']>;
	skip: number;
	setSkip: React.Dispatch<ITableContext['skip']>;
	search: string;
	setSearch: React.Dispatch<ITableContext['search']>;
	data: (string | number | boolean | undefined | null)[][];
	setData: React.Dispatch<ITableContext['data']>;
	loading: boolean;
	setLoading: React.Dispatch<ITableContext['loading']>;
	filter: Filter;
	setFilter: React.Dispatch<ITableContext['filter']>;
}

interface Filter {
	/**
	 * Property is the attribute name.
	 * Ex: 'firstName', 'lastName',...etc.
	 */
	property: string;
	/**
	 * search value to be filtered
	 */
	value: string;
}

