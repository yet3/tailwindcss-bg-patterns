import { describe, expect, test } from "vitest";
import {
	DEFAULT_OPTS,
	DOT_SIZES,
	LINE_WIDTHS,
	OFFSETS,
	SPACING,
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

	test("dot sizes", () => {
		expect(DOT_SIZES).toEqual([...Array(96)].map((_, i) => i + 1));
	});

	test("offsets", () => {
		expect(OFFSETS).toEqual([...Array(128 + 17)].map((_, i) => i));
	});

	test("spacing", () => {
		expect(SPACING).toEqual([...Array(128 + 1)].map((_, i) => i));
	});
});
