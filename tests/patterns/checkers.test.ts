import { test } from "vitest";
import { DEFAULT_OPTS } from "../../src/consts";
import { css, expectCssToBe, generateTwCss } from "../utils";

test("checkers pattern", async () => {
	expectCssToBe(
		await generateTwCss(`${DEFAULT_OPTS.prefix}pattern-checkers`),
		css`.${DEFAULT_OPTS.prefix}pattern-checkers {
      --tw-square-size: 32;
      --tw-offset-x: 0px;
      --tw-offset-y: 0px;
      --tw-square-color: #ffffff;
      --tw-unit: calc(var(--tw-square-size)* 1px);
      --tw-total-size: calc(var(--tw-unit)* 2);
      background-image: linear-gradient(45deg, var(--tw-square-color) 25%, transparent 25%), linear-gradient(-45deg, var(--tw-square-color) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--tw-square-color) 75%), linear-gradient(-45deg, transparent 75%, var(--tw-square-color) 75%);
      background-size: var(--tw-total-size) var(--tw-total-size);
      background-position: var(--tw-offset-x) var(--tw-offset-y), var(--tw-offset-x) calc(var(--tw-offset-y) + var(--tw-unit)), calc(var(--tw-offset-x) + var(--tw-unit)) calc(var(--tw-offset-y) - var(--tw-unit)), calc(var(--tw-offset-x) - var(--tw-unit)) var(--tw-offset-y)
    }`,
	);
});
