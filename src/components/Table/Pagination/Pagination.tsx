import React, {useContext, useMemo, useState} from 'react';
import {TableContext} from '../TableContext';
import {ITableContext} from '../../../types/ITableContext';
import {usePagination} from '../../../utilities/hooks/usePagination';
import ArrowRight from '../../icons/ArrowRight';
import PaginationBtn from './PaginationBtn';
import './Pagination.css';

const Pagination = () => {
	const {skip, setSkip, limit, total} = useContext(
		TableContext
	) as ITableContext;
	const currentPage = useMemo(() => {
		return Math.ceil(skip / limit) + 1;
	}, [skip, limit, total]);
	const DOTS = '…';
	const paginationRange = usePagination({
		totalCount: total,
		currentPage,
		dots: DOTS,
		pageSize: limit
	});

	function onNextPage() {
		setSkip(skip + limit);
	}
	function onPrevPage() {
		setSkip(skip - limit);
	}
	function setPage(pageNumber: number) {
		console.log({pageNumber});
		setSkip((pageNumber - 1) * limit);
	}

	return (
		<ul
			role="menu"
			aria-orientation="horizontal"
			className="flex pagination-ul">
			<PaginationBtn disable={currentPage === 1} onClick={onPrevPage}>
				<ArrowRight
					fill={currentPage === 1 ? '#888' : '#000'}
					style={{rotate: '180deg'}}
					size={15}
				/>
			</PaginationBtn>
			{paginationRange.map((v, i) => (
				<PaginationBtn
					key={i}
					disable={typeof v !== 'number'}
					onClick={() => {
						if (typeof v === 'number') setPage(v);
					}}>
					<div
						className={
							v === currentPage ? 'selected-page-btn' : ''
						}>
						{v}
					</div>
				</PaginationBtn>
			))}
			<PaginationBtn
				disable={
					currentPage === paginationRange[paginationRange.length - 1]
				}
				onClick={onNextPage}>
				<ArrowRight
					fill={
						currentPage ===
						paginationRange[paginationRange.length - 1]
							? '#888'
							: '#000'
					}
					size={15}
				/>
			</PaginationBtn>
		</ul>
	);
};

export default Pagination;
