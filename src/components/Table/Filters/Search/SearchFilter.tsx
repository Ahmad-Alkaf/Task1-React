import React, {useContext, useState} from 'react';
import SearchIcon from '../../../icons/SearchIcon';
import {TableContext} from '../../TableContext';
import {ITableContext} from '../../../../types/ITableContext';
import DropdownSearch from '../../../DropdownSearch';

const SearchFilter = () => {
	const {search, setSearch} = useContext(TableContext) as ITableContext;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			style={{
				borderLeft: '2px solid #ebebeb',
				borderRight: '2px solid #ebebeb'
			}}>
			<DropdownSearch
				search={search}
				setSearch={setSearch}
				isOpen={isOpen}
				setIsOpen={setIsOpen}>
				<SearchIcon size={14} />
			</DropdownSearch>
		</div>
	);
};

export default SearchFilter;
