import React from 'react';
import {TableContextProvider} from '../../components/Table/TableContext';
import UsersTable from './UsersTable';
import PagePath from '../../components/PagePath/PagePath';

const Users: React.FC = () => {
	return (
		<div>
			<PagePath/>
			<TableContextProvider>
				<UsersTable />
			</TableContextProvider>
		</div>
	);
};

export default Users;
