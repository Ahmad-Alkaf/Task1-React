import React, {useRef, useState} from 'react';
import './DropdownList.css';
import ArrowDown from '../icons/ArrowDown';
import useClickOutside from '../../utilities/hooks/useClickOutside';
const DropdownList = <T extends number | string>({
	item,
	list,
	setItem
}: {
	item: T;
	setItem: React.Dispatch<T>;
	list: T[];
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef('menu');
	useClickOutside(wrapperRef, () => setIsOpen(false));
	return (
		<div ref={wrapperRef as any} className="relative">
			<button
				aria-label="Toggle dropdown"
				aria-haspopup="true"
				aria-expanded={isOpen}
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="dropdown-btn">
				<span>{item}</span>
				<ArrowDown
					style={{
						rotate: (isOpen ? 180 : 0) + 'deg'
					}}
					size={15}
				/>
			</button>
			{isOpen && (
				<div aria-label="Dropdown menu" className="dropdown">
					<ul
						role="menu"
						aria-orientation="vertical"
						style={{margin: 0, padding: 0}}>
						{list.map((v, i) => (
							<li
								key={i}
								onClick={() => {
									setItem(v);
									setIsOpen(false);
								}}
								className="dropdown-item"
								style={{
									backgroundColor: v === item ? '#ebebeb' : ''
								}}>
								{v}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DropdownList;
