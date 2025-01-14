import { describe, test } from "vitest";
import {
	DEFAULT_OPTS,
	DOT_SIZES,
	LINE_WIDTHS,
	OFFSETS,
	SPACING,
	SQUARE_SIZES,
} from "../src/consts";
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

describe("dot sizes", () => {
	test(`dot sizes ${DOT_SIZES[0]}-${DOT_SIZES[DOT_SIZES.length - 1]}`, async () => {
		const expected: string[] = [];
		const classes: string[] = [];
		for (const value of DOT_SIZES) {
			classes.push(`${DEFAULT_OPTS.prefix}pattern-dot-${value}`);
			expected.push(
				css`.${DEFAULT_OPTS.prefix}pattern-dot-${value} {
            --tw-dot-size: ${value} /* px */
        }`,
			);
		}
		expectCssToBe(await generateTwCss(classes.join(" ")), expected.join(""));
	});

	test("custom dot size", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-dot-[321]`),
			css`.${DEFAULT_OPTS.prefix}pattern-dot-[321] {
          --tw-dot-size: 321 /* px */
        }`,
		);
	});
});

describe("square sizes", () => {
	test(`square sizes ${SQUARE_SIZES[0]}-${SQUARE_SIZES[SQUARE_SIZES.length - 1]}`, async () => {
		const expected: string[] = [];
		const classes: string[] = [];
		for (const value of SQUARE_SIZES) {
			classes.push(`${DEFAULT_OPTS.prefix}pattern-square-${value}`);
			expected.push(
				css`.${DEFAULT_OPTS.prefix}pattern-square-${value} {
            --tw-square-size: ${value} /* px */
        }`,
			);
		}
		expectCssToBe(await generateTwCss(classes.join(" ")), expected.join(""));
	});

	test("custom square size", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-square-[321]`),
			css`.${DEFAULT_OPTS.prefix}pattern-square-[321] {
          --tw-square-size: 321 /* px */
        }`,
		);
	});
});

describe("spacing", () => {
	test(`spacing ${SPACING[0]}-${SPACING[SPACING.length - 1]}`, async () => {
		const expected: string[] = [];
		const classes: string[] = [];
		for (const value of SPACING) {
			classes.push(`${DEFAULT_OPTS.prefix}pattern-spacing-${value}`);
			expected.push(
				css`.${DEFAULT_OPTS.prefix}pattern-spacing-${value} {
            --tw-spacing: ${value} /* px */
        }`,
			);
		}
		expectCssToBe(await generateTwCss(classes.join(" ")), expected.join(""));
	});

	test("custom spacing", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-spacing-[321]`),
			css`.${DEFAULT_OPTS.prefix}pattern-spacing-[321] {
          --tw-spacing: 321 /* px */
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
				`${DEFAULT_OPTS.prefix}pattern-offset-x-${offset} ${DEFAULT_OPTS.prefix}pattern-offset-y-${offset} -${DEFAULT_OPTS.prefix}pattern-offset-x-${offset} -${DEFAULT_OPTS.prefix}pattern-offset-y-${offset} `,
			);
			expected.push(
				css`.${DEFAULT_OPTS.prefix}pattern-offset-x-${offset} {
		         --tw-offset-x: ${offset}px
		     }
		     .${DEFAULT_OPTS.prefix}pattern-offset-y-${offset} {
		         --tw-offset-y: ${offset}px
		     }
        .-${DEFAULT_OPTS.prefix}pattern-offset-x-${offset} {
		         --tw-offset-x: -${offset}px
		     }
        .-${DEFAULT_OPTS.prefix}pattern-offset-y-${offset} {
		         --tw-offset-y: -${offset}px
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
        }`,
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

describe("dot colors", () => {
	test("custom color", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-dot-[#f8f8f8]`),
			css`.${DEFAULT_OPTS.prefix}pattern-dot-[#f8f8f8] {
        --tw-dot-color: #f8f8f8
    }`,
		);
	});

	test("color with variant", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-dot-red-300`),
			css`.${DEFAULT_OPTS.prefix}pattern-dot-red-300 {
        --tw-dot-color: #fca5a5
    }`,
		);
	});

	test("color without variant", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-dot-white`),
			css`.${DEFAULT_OPTS.prefix}pattern-dot-white {
        --tw-dot-color: #fff
    }`,
		);
	});
});

describe("square colors", () => {
	test("custom color", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-square-[#f8f8f8]`),
			css`.${DEFAULT_OPTS.prefix}pattern-square-[#f8f8f8] {
        --tw-square-color: #f8f8f8
    }`,
		);
	});

	test("color with variant", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-square-red-300`),
			css`.${DEFAULT_OPTS.prefix}pattern-square-red-300 {
        --tw-square-color: #fca5a5
    }`,
		);
	});

	test("color without variant", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-square-white`),
			css`.${DEFAULT_OPTS.prefix}pattern-square-white {
        --tw-square-color: #fff
    }`,
		);
	});
});
