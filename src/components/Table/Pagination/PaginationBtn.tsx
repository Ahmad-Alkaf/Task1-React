import React, {MouseEventHandler, PropsWithChildren} from 'react';
import './Pagination.css';

const PaginationBtn = ({
	disable = false,
	onClick,
	children
}: PropsWithChildren<{disable?: boolean; onClick: MouseEventHandler}>) => {
	return (
		<li
			style={{
				cursor: disable ? 'default' : 'pointer',
				textDecoration: disable ? 'none' : undefined
			}}
			className="pagination-li"
			onClick={e => {
				if (!disable) onClick(e);
			}}>
			{children}
		</li>
	);
};

export default PaginationBtn;
