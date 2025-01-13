import { describe, test } from "vitest";
import { DEFAULT_OPTS } from "../src/consts";
import { css, expectCssToBe, generateTwCss } from "./utils";

describe("polka dot patterns", () => {
	test("polka dot pattern", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-polka-dot`),
			css`.${DEFAULT_OPTS.prefix}pattern-polka-dot {
        --tw-dot-size: 8;
        --tw-spacing: 32;
        --tw-offset-x: 0px;
        --tw-offset-y: 0px;
        --tw-dot-color: #ffffff;
        --tw-dot-unit: calc(var(--tw-dot-size) + var(--tw-spacing));
        --tw-gradient-stop: calc(70.5%*(var(--tw-dot-size) / var(--tw-dot-unit)));
        background-image: radial-gradient(var(--tw-dot-color) var(--tw-gradient-stop), transparent var(--tw-gradient-stop));
        --tw-bg-size: calc(var(--tw-dot-unit)* 1px);
        background-size: var(--tw-bg-size) var(--tw-bg-size);
        background-position: var(--tw-offset-x) var(--tw-offset-y)
      }`,
		);
	});

	test("hexagonal polka dot pattern", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-hex-polka-dot`),
			css`.${DEFAULT_OPTS.prefix}pattern-hex-polka-dot {
        --tw-dot-size: 8;
        --tw-spacing: 32;
        --tw-offset-x: 0px;
        --tw-offset-y: 0px;
        --tw-dot-color: #ffffff;
        --tw-spacing-final: calc(var(--tw-spacing) + var(--tw-dot-size)* 0.42);
        --tw-dot-unit: calc(var(--tw-dot-size) + var(--tw-spacing-final));
        --tw-2d-offset-base: calc((var(--tw-dot-unit) / 2)* 1px);
        --tw-gradient-stop: calc(70.5%*(var(--tw-dot-size) / var(--tw-dot-unit)));
        background-image: radial-gradient(var(--tw-dot-color) var(--tw-gradient-stop), transparent var(--tw-gradient-stop)), radial-gradient(var(--tw-dot-color) var(--tw-gradient-stop), transparent var(--tw-gradient-stop));
        --tw-bg-size: calc(var(--tw-dot-unit)* 1px);
        background-size: var(--tw-bg-size) var(--tw-bg-size);
        background-position: var(--tw-offset-x) var(--tw-offset-y), calc(var(--tw-2d-offset-base) + var(--tw-offset-x)) calc(var(--tw-2d-offset-base) + var(--tw-offset-y))
      }`,
		);
	});
});
