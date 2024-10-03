import React from 'react';
import {Outlet, useOutlet} from 'react-router-dom';
import NoPage from '../pages/404/NoPage';

const Layout: React.FC = () => {
	const outlet = useOutlet();
	return <div className="container">{outlet || <NoPage />}</div>;
};

export default Layout;
