import { describe, test } from "vitest";
import { DEFAULT_OPTS, GRID_CELL_SIZE } from "../src/consts";
import { css, expectCssToBe, generateTwCss } from "./utils";

describe("grid pattern", () => {
	test("grid pattern", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-grid`),
			css`.${DEFAULT_OPTS.prefix}pattern-grid {
      --tw-line-size: 1;
      --tw-cell-size: 24;
      --tw-offset-x: 0px;
      --tw-offset-y: 0px;
      --tw-line-color: #ffffff;
      --tw-unit: calc(var(--tw-line-size) + var(--tw-cell-size));
      --tw-line-stop: calc((var(--tw-line-size) / var(--tw-unit) * 100%) / 2);
      --tw-line-start-stop: calc(50% - var(--tw-line-stop));
      --tw-line-end-stop: calc(50% + var(--tw-line-stop));
      background-image: linear-gradient(
            0deg,
            transparent var(--tw-line-start-stop),
            var(--tw-line-color) var(--tw-line-start-stop),
            var(--tw-line-color) var(--tw-line-end-stop),
            transparent var(--tw-line-end-stop),
            transparent 100%
          ),
          linear-gradient(
            90deg,
            transparent var(--tw-line-start-stop),
            var(--tw-line-color) var(--tw-line-start-stop),
            var(--tw-line-color) var(--tw-line-end-stop),
            transparent var(--tw-line-end-stop),
            transparent 100%
          );
      background-size: calc(var(--tw-unit) * 1px) calc(var(--tw-unit) * 1px);
      background-position: var(--tw-offset-x) var(--tw-offset-y)
    }`,
		);
	});
});

describe("grid cell sizes", () => {
	test(`grid cell sizes ${GRID_CELL_SIZE[0]}-${GRID_CELL_SIZE[GRID_CELL_SIZE.length - 1]}`, async () => {
		const expected: string[] = [];
		const classes: string[] = [];
		for (const size of GRID_CELL_SIZE) {
			classes.push(`${DEFAULT_OPTS.prefix}pattern-cell-${size}`);
			expected.push(
				css`.${DEFAULT_OPTS.prefix}pattern-cell-${size} {
            --tw-cell-size: ${size} /* px */
        }`,
			);
		}
		expectCssToBe(await generateTwCss(classes.join(" ")), expected.join(""));
	});

	test("custom cell width", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-cell-[321]`),
			css`.${DEFAULT_OPTS.prefix}pattern-cell-[321] {
          --tw-cell-size: 321 /* px */
        }`,
		);
	});
});
