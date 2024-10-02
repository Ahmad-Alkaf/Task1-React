import React, {useContext, useEffect, useMemo, useState} from 'react';
import SearchIcon from '../../icons/SearchIcon';
import {TableContext} from '../TableContext';
import {ITableContext} from '../../../types/ITableContext';

const SearchFilter = () => {
	const [searchBoxShown, setSearchBoxShown] = useState<boolean>(false);
	const {search, setSearch} = useContext(TableContext) as ITableContext;
	// useEffect(() => {
	// 	setData(
	// 		cacheData.filter(
	// 			v =>
	// 				// v.tos
	// 		)
	// 	);
	// 	console.log(data);
	// }, [search]);

	return (
		<div className="relative">
			<button
				onClick={() => {
					setSearchBoxShown(v => !v);
				}}
				aria-label="Toggle search">
				<SearchIcon size={14} />
			</button>
			{searchBoxShown && (
				<div className="absolute">
					<div className="p-2">
						<input
							type="search"
							placeholder="Search..."
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchFilter;
