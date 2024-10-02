import React, {useContext, useEffect} from 'react';
import {TableContext} from '../../components/Table/TableContext';
import {ITableContext} from '../../types/ITableContext';
import axios, {AxiosRequestConfig} from 'axios';
import {UserGetAllResponse} from '../../types/Dummyjson';
import Table from '../../components/Table/Table';

const UsersTable = () => {
	const {setColumns, setData} = useContext(TableContext) as ITableContext;
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
	useEffect(() => {
		axios
			.get<any, AxiosRequestConfig<UserGetAllResponse>>(
				'https://dummyjson.com/users'
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
			})
			.catch(console.error);
	}, []);
	return <Table />;
};

export default UsersTable;
