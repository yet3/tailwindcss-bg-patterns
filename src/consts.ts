import type { IResolvedOpts } from "./types";

export const LINE_WIDTHS = [
	0.5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16,
];
export const DOT_SIZES: number[] = [...Array(96)].map((_, i) => i + 1);
export const SQUARE_SIZES: number[] = [...Array(96)].map((_, i) => i + 1);
export const SPACING: number[] = [...Array(128 + 1)].map((_, i) => i);
export const OFFSETS: number[] = [...Array(128 + 17)].map((_, i) => i);

export const DEFAULT_OPTS: IResolvedOpts = {
	prefix: "bg-",
};
