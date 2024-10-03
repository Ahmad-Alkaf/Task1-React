import React, {useMemo} from 'react';
import './PagePath.css';
const PagePath = () => {
	const path = useMemo(() => {
		let lowerPath = window.location.pathname.replaceAll('/', '');
		//Titlecase
		return lowerPath.length > 0
			? lowerPath[0].toUpperCase() + lowerPath.slice(1)
			: lowerPath;
	}, [window.location.pathname]);
	return (
		<h2 style={{marginBottom:'2.5rem'}}>
			Home / <span className="relative page-path-header fit-content">{path}</span>
		</h2>
	);
};

export default PagePath;
