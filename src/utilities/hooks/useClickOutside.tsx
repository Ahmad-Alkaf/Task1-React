import {useEffect} from 'react';

/**
 * This Hook can be used for detecting clicks outside the Opened Dropdown menu
 */
export default function useClickOutside(ref: any, onClickOutside: () => any) {
	useEffect(() => {
		/**
		 * Invoke Function onClick outside of element
		 */
		function handleClickOutside(event: MouseEvent) {
			if (ref?.current && !ref.current.contains(event.target)) {
				onClickOutside();
			}
		}
		// Bind
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// dispose
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, onClickOutside]);
}
