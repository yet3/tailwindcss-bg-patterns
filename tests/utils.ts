import postcss from "postcss";
import tailwindcss from "tailwindcss";
import { expect } from "vitest";
import bgPatternsPlugin from "../src";
import type { IOptions } from "../src/types";

export const css = String.raw;

export const expectCssToBe = (css: string, toBe: string) => {
	expect(css.replaceAll(/\\/gm, "").replaceAll(/\s/gm, "")).toBe(
		toBe.replaceAll(/\s/gm, ""),
	);
};

export const generateTwCss = async (raw: string, pluginOpts?: IOptions) => {
	const result = await postcss(
		tailwindcss({
			content: [{ raw }],
			plugins: [bgPatternsPlugin(pluginOpts)],
		}),
	).process("@tailwind utilities;@tailwind components;", { from: undefined });
	return result.css;
};
