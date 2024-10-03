import React from 'react';
import PagePath from '../../components/PagePath/PagePath';
import { TableContextProvider } from '../../components/Table/TableContext';
import ProductsTable from './ProductsTable';

const Products = () => {
	return (
		<div>
			<PagePath />
			<TableContextProvider>
				<ProductsTable />
			</TableContextProvider>
		</div>
	);
};

export default Products;
