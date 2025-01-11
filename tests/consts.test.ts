import { describe, expect, test } from "vitest";
import {
	DEFAULT_OPTS,
	GRID_CELL_SIZE,
	LINE_WIDTHS,
	OFFSETS,
} from "../src/consts";

describe("default production values", () => {
	test("prefix", () => {
		expect(DEFAULT_OPTS).toHaveProperty("prefix");
		expect(DEFAULT_OPTS.prefix).toBe("bg-");
	});

	test("line widths", () => {
		expect(LINE_WIDTHS).toEqual([
			0.5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16,
		]);
	});

	test("grid cell sizes", () => {
		expect(GRID_CELL_SIZE).toEqual([...Array(128)].map((_, i) => i + 1));
	});

	test("offsets", () => {
		expect(OFFSETS).toEqual([...Array(128 + 16)].map((_, i) => i + 1));
	});
});
