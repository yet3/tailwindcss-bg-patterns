import { describe, test } from "vitest";
import { DEFAULT_OPTS } from "../../src/consts";
import { css, expectCssToBe, generateTwCss } from "../utils";

describe("lines patterns", () => {
	test("horizontal lines pattern", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-x-lines`),
			css`.${DEFAULT_OPTS.prefix}pattern-x-lines {
        --tw-line-size: 1;
        --tw-spacing: 24;
        --tw-offset-x: 0px;
        --tw-offset-y: 0px;
        --tw-line-color: #ffffff;
        --tw-unit: calc(var(--tw-line-size) + var(--tw-spacing));
        --tw-line-stop: calc((var(--tw-line-size) / var(--tw-unit)* 100%) / 2);
        --tw-line-start-stop: calc(50% - var(--tw-line-stop));
        --tw-line-end-stop: calc(50% + var(--tw-line-stop));
        background-image: linear-gradient(0deg, transparent var(--tw-line-start-stop), var(--tw-line-color) var(--tw-line-start-stop), var(--tw-line-color) var(--tw-line-end-stop), transparent var(--tw-line-end-stop), transparent 100%);
        background-size: calc(var(--tw-unit)* 1px) calc(var(--tw-unit)* 1px);
        background-position: var(--tw-offset-x) var(--tw-offset-y)
      }`,
		);
	});

	test("vertical lines pattern", async () => {
		expectCssToBe(
			await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-y-lines`),
			css`.${DEFAULT_OPTS.prefix}pattern-y-lines {
        --tw-line-size: 1;
        --tw-spacing: 24;
        --tw-offset-x: 0px;
        --tw-offset-y: 0px;
        --tw-line-color: #ffffff;
        --tw-unit: calc(var(--tw-line-size) + var(--tw-spacing));
        --tw-line-stop: calc((var(--tw-line-size) / var(--tw-unit)* 100%) / 2);
        --tw-line-start-stop: calc(50% - var(--tw-line-stop));
        --tw-line-end-stop: calc(50% + var(--tw-line-stop));
        background-image: linear-gradient(90deg, transparent var(--tw-line-start-stop), var(--tw-line-color) var(--tw-line-start-stop), var(--tw-line-color) var(--tw-line-end-stop), transparent var(--tw-line-end-stop), transparent 100%);
        background-size: calc(var(--tw-unit)* 1px) calc(var(--tw-unit)* 1px);
        background-position: var(--tw-offset-x) var(--tw-offset-y)
      }`,
		);
	});
});
