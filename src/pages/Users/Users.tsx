import React from 'react';
import {TableContextProvider} from '../../components/Table/TableContext';
import UsersTable from './UsersTable';

const Users: React.FC = () => {
	return (
		<div>
			<h2>Home / {window.location.pathname.replaceAll('/', '')}</h2>
			<TableContextProvider>
				<UsersTable />
			</TableContextProvider>
		</div>
	);
};

export default Users;
