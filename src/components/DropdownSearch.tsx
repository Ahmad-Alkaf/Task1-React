import React, {PropsWithChildren, useRef} from 'react';
import useClickOutside from '../utilities/hooks/useClickOutside';

const DropdownSearch = ({
	search,
	setSearch,
	children,
	isOpen,
	setIsOpen,
	date = false
}: PropsWithChildren<{
	search: string;
	setSearch: React.Dispatch<string>;
	isOpen: boolean;
	setIsOpen: React.Dispatch<boolean>;
	date?: boolean;
}>) => {
	const wrapperRef = useRef('menu');
	useClickOutside(wrapperRef, () => setIsOpen(false));
	return (
		<div ref={wrapperRef as any} className="relative">
			<button
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				aria-label="Toggle search"
				style={{
					backgroundColor: '#fff',
					border: 'none',
					padding: '0.15rem 0.8rem',
					cursor: 'pointer'
				}}>
				{children}
			</button>
			{isOpen && (
				<div className="absolute">
					<div className="p-2">
						<input
							type={date ? 'date' : 'search'}
							placeholder="Search..."
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default DropdownSearch;
