import { describe, expect, test } from "vitest";
import { arrToTwConfig } from "../src/lib/arrToTwConfig";

describe("arrToTwConfig", () => {
	const array: number[] = [0.5, 1, 2, 3, 4];

	test("without unit", () => {
		expect(arrToTwConfig(array)).toEqual({
			0.5: "0.5",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
		});
	});

	test("with unit", () => {
		expect(arrToTwConfig(array, "px")).toEqual({
			0.5: "0.5px",
			1: "1px",
			2: "2px",
			3: "3px",
			4: "4px",
		});
	});
});
