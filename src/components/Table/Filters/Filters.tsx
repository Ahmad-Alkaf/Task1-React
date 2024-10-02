import React from 'react'
import SearchFilter from './SearchFilter'
import Entries from './Entries'

const Filters = () => {
  return (
	<div className="flex">
		<Entries/>
		<span className="px-2">|</span>
		<SearchFilter/>
	</div>
  )
}

export default Filters