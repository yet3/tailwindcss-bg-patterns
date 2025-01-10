import type { IResolvedOpts } from "./types";

export const LINE_WIDTHS = [
	0.5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16,
];
export const GRID_CELL_SIZE: number[] = [...Array(128)].map((_, i) => i + 1);
export const OFFSETS: number[] = [...Array(128 + 16)].map((_, i) => i + 1);

export const arrToObj = (arr: number[], unit = "") => {
	const obj: Record<string, string> = {};

	for (const val of arr) {
		obj[val] = val + unit;
	}

	return obj;
};

export const DEFAULT_OPTS: IResolvedOpts = {
	prefix: "bg-",
};
