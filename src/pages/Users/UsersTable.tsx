import React, {useContext, useEffect} from 'react';
import {TableContext} from '../../components/Table/TableContext';
import {ITableContext} from '../../types/ITableContext';
import axios, {AxiosRequestConfig} from 'axios';
import {UserGetAllResponse} from '../../types/Dummyjson';
import Table from '../../components/Table/Table';
import Pagination from '../../components/Table/Pagination';
import Filters from '../../components/Table/Filters/Filters';

const UsersTable = () => {
	const {setColumns, setData, limit, skip, setLoading} = useContext(
		TableContext
	) as ITableContext;
	useEffect(() => {
		setColumns([
			'First Name',
			'Last Name',
			'Maiden Name',
			'Age',
			'Gender',
			'Email',
			'Username',
			'BloodGroup',
			'EyeColor'
		]);
	}, []);
	useEffect(() => {
		setLoading(true);

		axios
			.get<any, AxiosRequestConfig<UserGetAllResponse>>(
				'https://dummyjson.com/users',
				{
					params: {limit, skip}
				}
			)
			.then(response => {
				setData(
					response.data?.users.map(v => [
						v.firstName,
						v.lastName,
						v.maidenName,
						v.age,
						v.gender,
						v.email,
						v.username,
						v.bloodGroup,
						v.eyeColor
					]) ?? []
				);
				console.log(response.data);
				setLoading(false);
			})
			.catch(console.error);
	}, [ limit, skip]);
	return (
		<>
			<Filters />
			<Table />
			<Pagination />
		</>
	);
};

export default UsersTable;
