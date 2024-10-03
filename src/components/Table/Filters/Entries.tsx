import React, {useContext} from 'react';
import DropdownList from '../../DropdownList/DropdownList';
import {TableContext} from '../TableContext';
import {ITableContext} from '../../../types/ITableContext';

const Entries = () => {
	const {limit, setLimit, setData} = useContext(
		TableContext
	) as ITableContext;
	return (
		<div className="flex" style={{paddingRight:'0.8rem'}}>
			<DropdownList
				setItem={item => {
					setData([]);
					setLimit(item);
				}}
				item={limit}
				list={[5, 10, 20, 50]}
			/>
			<span>Entries</span>
		</div>
	);
};

export default Entries;
