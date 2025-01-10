import { describe, expect, test } from "vitest";
import { DEFAULT_OPTS } from "../src/consts";

describe("default production values", () => {
	test("prefix", () => {
		expect(DEFAULT_OPTS).toHaveProperty("prefix");
		expect(DEFAULT_OPTS.prefix).toBe("bg-");
	});
});
