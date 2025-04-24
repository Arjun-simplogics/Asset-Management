import React from "react";

interface IconProps {
	width?: number;
	height?: number;
	color?: string;
	className?: string;
}

export const FilterFilledIcon: React.FC<IconProps> = ({ width = 29, height = 28, color = "none" }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.60348 0.0183316L26.286 0C28.7133 0.281388 29.8553 3.18326 28.2657 5.10807L18.2997 16.3306C18.1015 18.3407 18.4379 20.5523 18.2656 22.5395C18.2244 23.0133 18.0764 23.1591 17.7579 23.4606C16.6115 24.5486 14.9915 25.7521 13.7285 26.753C12.7902 27.4963 11.4374 28.9729 10.7494 27.0582L10.7073 16.3297L0.481103 4.75519C-0.706566 2.7983 0.419208 0.381295 2.60348 0.0183316Z"
				fill={color}
			/>
		</svg>
	);
};
