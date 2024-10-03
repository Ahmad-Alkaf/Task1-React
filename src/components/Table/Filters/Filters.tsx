import React from 'react'
import SearchFilter from './Search/SearchFilter'
import Entries from './Entries'
import SearchInColumn from './Search/SearchInColumn'

const Filters = () => {
  return (
	<div className="flex">
		<Entries/>
		<SearchFilter/>
		<SearchInColumn title="Name" property="firstName" />
		<SearchInColumn title="Email" property="email" />
		<SearchInColumn date title="Birth Date" property="birthDate" />
		<SearchInColumn title="Gender" property="gender" />
	</div>
  )
}

export default Filters