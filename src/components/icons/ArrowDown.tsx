import React from 'react';

const ArrowDown = ({
	size,
	style
}: {
	size: number;
	style?: React.CSSProperties;
}) => {
	return (
		<svg
			height={size}
			width={size}
			style={{
				verticalAlign: 'middle',
				fill: 'currentColor',
				overflow: 'hidden',
				paddingLeft: '0.3rem',
				paddingRight: '0.3rem',
				...(style ?? {})
			}}
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M192 360c0-10.752 3.968-20.096 11.904-28.096C211.904 323.904 221.248 320 232 320l560 0c10.816 0 20.16 3.904 28.096 11.904C828.096 339.904 832 349.248 832 360s-3.904 20.096-11.904 28.096l-280 280C532.16 675.968 522.816 680 512 680c-10.752 0-20.096-3.968-28.096-11.904L203.904 388.096C195.968 380.096 192 370.752 192 360z" />
		</svg>
	);
};

export default ArrowDown;
