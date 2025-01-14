import { describe, test } from "vitest";
import { DEFAULT_OPTS } from "../../src/consts";
import { css, expectCssToBe, generateTwCss } from "../utils";

const DEFAULT_HATCHING_CSS = css`
.${DEFAULT_OPTS.prefix}pattern-hatching {
  --tw-line-size: 1;
  --tw-spacing: 12;
  --tw-offset-x: 0px;
  --tw-offset-y: 0px;
  --tw-hatching-angle: 45deg;
  --tw-line-color: #ffffff;
  --tw-unit: calc((var(--tw-line-size) + var(--tw-spacing))* 2);
  --tw-line-stop: calc((var(--tw-line-size) / var(--tw-unit)* 100%) / 2);
  --tw-1st-start-stop: calc(75% - var(--tw-line-stop));
  --tw-1st-end-stop: calc(75% + var(--tw-line-stop));
  --tw-2ed-start-stop: calc(25% - var(--tw-line-stop));
  --tw-2ed-end-stop: calc(25% + var(--tw-line-stop));
  background-image: linear-gradient(var(--tw-hatching-angle), transparent var(--tw-1st-start-stop), var(--tw-line-color) var(--tw-1st-start-stop), var(--tw-line-color) var(--tw-1st-end-stop), transparent var(--tw-1st-end-stop), transparent 100%), linear-gradient(var(--tw-hatching-angle), transparent var(--tw-2ed-start-stop), var(--tw-line-color) var(--tw-2ed-start-stop), var(--tw-line-color) var(--tw-2ed-end-stop), transparent var(--tw-2ed-end-stop), transparent 100%);
  background-size: calc(var(--tw-unit)* 1px) calc(var(--tw-unit)* 1px);
  background-position: calc(var(--tw-spacing)* -0.5px + var(--tw-offset-x)) var(--tw-offset-y)    
}`;

describe("hatching patterns", () => {
	test("hatching left-to-right pattern (default)", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-hatching`),
			DEFAULT_HATCHING_CSS,
		);
	});

	test("hatching right-to-left pattern", async () => {
		expectCssToBe(
			await generateTwCss(
				`${DEFAULT_OPTS.prefix}pattern-hatching ${DEFAULT_OPTS.prefix}pattern-hatching-right-to-left`,
			),
			css`${DEFAULT_HATCHING_CSS}
      .${DEFAULT_OPTS.prefix}pattern-hatching-right-to-left {
        --tw-hatching-angle: -45deg
      }`,
		);
	});

	test("cross-hatching pattern", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-cross-hatching`),
			css`.${DEFAULT_OPTS.prefix}pattern-cross-hatching {
        --tw-line-size: 1;
        --tw-spacing: 12;
        --tw-offset-x: 0px;
        --tw-offset-y: 0px;
        --tw-hatching-angle: 45deg;
        --tw-line-color: #ffffff;
        --tw-unit: calc((var(--tw-line-size) + var(--tw-spacing))* 2);
        --tw-line-stop: calc((var(--tw-line-size) / var(--tw-unit)* 100%) / 2);
        --tw-1st-start-stop: calc(75% - var(--tw-line-stop));
        --tw-1st-end-stop: calc(75% + var(--tw-line-stop));
        --tw-2ed-start-stop: calc(25% - var(--tw-line-stop));
        --tw-2ed-end-stop: calc(25% + var(--tw-line-stop));
        background-image: linear-gradient(var(--tw-hatching-angle), transparent var(--tw-1st-start-stop), var(--tw-line-color) var(--tw-1st-start-stop), var(--tw-line-color) var(--tw-1st-end-stop), transparent var(--tw-1st-end-stop), transparent 100%), linear-gradient(var(--tw-hatching-angle), transparent var(--tw-2ed-start-stop), var(--tw-line-color) var(--tw-2ed-start-stop), var(--tw-line-color) var(--tw-2ed-end-stop), transparent var(--tw-2ed-end-stop), transparent 100%), linear-gradient(calc(var(--tw-hatching-angle)* -1), transparent var(--tw-1st-start-stop), var(--tw-line-color) var(--tw-1st-start-stop), var(--tw-line-color) var(--tw-1st-end-stop), transparent var(--tw-1st-end-stop), transparent 100%), linear-gradient(calc(var(--tw-hatching-angle)* -1), transparent var(--tw-2ed-start-stop), var(--tw-line-color) var(--tw-2ed-start-stop), var(--tw-line-color) var(--tw-2ed-end-stop), transparent var(--tw-2ed-end-stop), transparent 100%);
        background-size: calc(var(--tw-unit)* 1px) calc(var(--tw-unit)* 1px);
        background-position: calc(var(--tw-spacing)* -0.5px + var(--tw-offset-x)) var(--tw-offset-y)
      }`,
		);
	});
});

describe("hatching direction", () => {
	test("left-to-right", async () => {
		expectCssToBe(
			await generateTwCss(
				`${DEFAULT_OPTS.prefix}pattern-hatching-left-to-right`,
			),
			css`.${DEFAULT_OPTS.prefix}pattern-hatching-left-to-right {
        --tw-hatching-angle: 45deg
      }`,
		);
	});
	test("right-to-left", async () => {
		expectCssToBe(
			await generateTwCss(
				`${DEFAULT_OPTS.prefix}pattern-hatching-right-to-left`,
			),
			css`.${DEFAULT_OPTS.prefix}pattern-hatching-right-to-left {
        --tw-hatching-angle: -45deg
      }`,
		);
	});
});
