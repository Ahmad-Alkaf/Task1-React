import React, { PropsWithChildren } from 'react'
import SearchFilter from './Search/SearchFilter'
import Entries from './Entries'
import SearchInColumn from './Search/SearchInColumn'

const Filters = ({children}:PropsWithChildren) => {
  return (
	<div className="flex">
		<Entries/>
		<SearchFilter/>
		{children}
	</div>
  )
}

export default Filters