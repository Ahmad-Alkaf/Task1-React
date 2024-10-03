import React, {useContext, useState} from 'react';
import {TableContext} from '../../TableContext';
import {ITableContext} from '../../../../types/ITableContext';
import DropdownSearch from '../../../DropdownSearch';
import ArrowDown from '../../../icons/ArrowDown';

const SearchInColumn = ({
	title,
	property,
	date,
}: {
	title: string;
	property: string;
	date?: boolean;
}) => {
	const {filter, setFilter} = useContext(TableContext) as ITableContext;
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<DropdownSearch
				date={date}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				search={filter.property === property ? filter.value : ''}
				setSearch={value => setFilter({property, value})}>
				{title}
				<ArrowDown
					style={{
						rotate: (isOpen ? 180 : 0) + 'deg'
					}}
					size={15}
				/>
			</DropdownSearch>
		</div>
	);
};

export default SearchInColumn;
