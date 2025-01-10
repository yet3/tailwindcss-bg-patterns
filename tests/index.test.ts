import { describe, test } from "vitest";
import { DEFAULT_OPTS, LINE_WIDTHS, OFFSETS } from "../src/consts";
import { css, expectCssToBe, generateTwCss } from "./utils";

describe("line widths", () => {
	for (const width of LINE_WIDTHS) {
		test(`line width ${width}`, async () => {
			expectCssToBe(
				await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-line-${width}`),
				css`.${DEFAULT_OPTS.prefix}pattern-line-${width} {
          --tw-line-size: ${width} /* px */
        }`,
			);
		});
	}

	test("custom line width", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-line-[321]`),
			css`.${DEFAULT_OPTS.prefix}pattern-line-[321] {
          --tw-line-size: 321 /* px */
        }`,
		);
	});
});

describe("offsets", () => {
	test(`offsets ${OFFSETS[0]}-${OFFSETS[OFFSETS.length - 1]}`, async () => {
		const expected: string[] = [];
		const classes: string[] = [];
		for (const offset of OFFSETS) {
			classes.push(
				`${DEFAULT_OPTS.prefix}pattern-offset-x-${offset} ${DEFAULT_OPTS.prefix}pattern-offset-y-${offset}`,
			);
			expected.push(
				css`.${DEFAULT_OPTS.prefix}pattern-offset-x-${offset} {
		         --tw-offset-x: ${offset}px
		     }
		     .${DEFAULT_OPTS.prefix}pattern-offset-y-${offset} {
		         --tw-offset-y: ${offset}px
		     }`,
			);
		}
		expectCssToBe(await generateTwCss(classes.join(" ")), expected.join(""));
	});

	test("custom offset", async () => {
		expectCssToBe(
			await generateTwCss(
				`${DEFAULT_OPTS.prefix}pattern-offset-x-[321px] ${DEFAULT_OPTS.prefix}pattern-offset-y-[321px]`,
			),
			css`.${DEFAULT_OPTS.prefix}pattern-offset-x-[321px] {
          --tw-offset-x: 321px
        }
        .${DEFAULT_OPTS.prefix}pattern-offset-y-[321px] {
          --tw-offset-y: 321px
        }
      `,
		);
	});
});

describe("line colors", () => {
	test("custom color", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-line-[#f8f8f8]`),
			css`.${DEFAULT_OPTS.prefix}pattern-line-[#f8f8f8] {
        --tw-line-color: #f8f8f8
    }`,
		);
	});

	test("color with variant", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-line-red-300`),
			css`.${DEFAULT_OPTS.prefix}pattern-line-red-300 {
        --tw-line-color: #fca5a5
    }`,
		);
	});

	test("color without variant", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-line-white`),
			css`.${DEFAULT_OPTS.prefix}pattern-line-white {
        --tw-line-color: #fff
    }`,
		);
	});
});
