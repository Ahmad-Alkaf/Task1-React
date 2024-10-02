import React, {useState} from 'react';
import './Dropdown.css';
const Dropdown = <T extends number | string>({
	item,
	list,
	setItem
}: {
	item: T;
	setItem: React.Dispatch<T>;
	list: T[];
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="relative">
			<button
				aria-label="Toggle dropdown"
				aria-haspopup="true"
				aria-expanded={isOpen}
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="dropdown-btn">
				<span>{item}</span>
				<span
					className="rectangle"
					style={{
						rotate: (isOpen ? 180 : 0) + 'deg',
						paddingLeft: (isOpen ? 0 : 0.6) + 'rem',
						paddingRight: (isOpen ? 0.6 : 0) + 'rem',
						marginTop: (isOpen ? 0 : -4) + 'px',
						marginBottom: (isOpen ? 0 : 4) + 'px'
					}}>
					&#128899;
				</span>
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

export default Dropdown;
