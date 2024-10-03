import axios, {AxiosRequestConfig} from 'axios';
import React, {useContext, useEffect} from 'react';
import {ProductGetAllResponse} from '../../types/Dummyjson';
import Filters from '../../components/Table/Filters/Filters';
import Pagination from '../../components/Table/Pagination/Pagination';
import {ITableContext} from '../../types/ITableContext';
import {TableContext} from '../../components/Table/TableContext';
import SearchInColumn from '../../components/Table/Filters/Search/SearchInColumn';
import Table from '../../components/Table/TableStructure/Table';

const ProductsTable = () => {
	const {
		setColumns,
		setData,
		limit,
		skip,
		setTotal,
		setLoading,
		filter,
		setFilter
	} = useContext(TableContext) as ITableContext;
	useEffect(() => {
		setColumns([
			'Title',
			'Brand',
			'Category',
			'Price',
			'Discount',
			'Rating',
			'Stock',
			'Warranty',
			'Shipping',
			'weight',
			'Return Policy',
			'sku'
		]);
	}, []);
	useEffect(() => {
		setLoading(true);
		if (filter.property.length > 0 || filter.value.length > 0) {
			alert(
				"DummyJSON dose NOT have implementation for the Product's filters! See https://dummyjson.com/docs/products#products-all"
			);
			setFilter({property: '', value: ''});
		}
		axios
			.get<any, AxiosRequestConfig<ProductGetAllResponse>>(
				'https://dummyjson.com/products',
				{
					params: {
						limit,
						skip
					}
				}
			)
			.then(response => {
				setData(
					response.data?.products.map(v => [
						v.title,
						v.brand,
						v.category,
						v.price,
						v.discountPercentage,
						v.rating,
						v.stock,
						v.warrantyInformation,
						v.shippingInformation,
						v.weight,
						v.returnPolicy,
						v.sku
					]) ?? []
				);
				setTotal(response.data?.total ?? 0);
				console.log(response.data);
				setLoading(false);
			})
			.catch(console.error);
	}, [limit, skip, filter]);
	return (
		<>
			<Filters>
				<SearchInColumn title="Title" property="title" />
				<SearchInColumn title="Brand" property="brand" />
				<SearchInColumn title="Category" property="category" />
			</Filters>
			<Table />
			<Pagination />
		</>
	);
};

export default ProductsTable;
