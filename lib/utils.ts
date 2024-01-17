import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export const getEllipsePosition = (angle: number, a: number, b: number): number[] => {
	// angle in radians, a and b are the semi-major and semi-minor axes
	const x = a * Math.cos(angle);
	const y = b * Math.sin(angle);
	return [x, y, 0]; // 0 for z since it's a flat ellipse
};

