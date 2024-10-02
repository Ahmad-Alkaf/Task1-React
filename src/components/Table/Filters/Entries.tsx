import React, {useContext} from 'react';
import Dropdown from '../../Dropdown/Dropdown';
import {TableContext} from '../TableContext';
import {ITableContext} from '../../../types/ITableContext';

const Entries = () => {
	const {limit, setLimit, setData} = useContext(
		TableContext
	) as ITableContext;
	return (
		<div className="flex">
			<Dropdown
				setItem={item => {
					setData([]);
					setLimit(item);
				}}
				item={limit}
				list={[5, 10, 20, 50]}
			/>
			Entries
		</div>
	);
};

export default Entries;
