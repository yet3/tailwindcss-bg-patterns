import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
import type { IOptions } from "../types";

export const generateSquareColors = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	const colors = api.theme("backgroundColor");
	const styles: Record<string, unknown> = {};

	for (const colorKey in colors) {
		const color = colors[colorKey] as string | Record<string, string>;

		if (typeof color === "string") {
			styles[`.${api.e(`${opts.prefix}pattern-square-${colorKey}`)}`] = {
				"--tw-square-color": color,
			} as unknown as CSSRuleObject;
		} else {
			for (const variant in color) {
				styles[
					`.${api.e(`${opts.prefix}pattern-square-${colorKey}-${variant}`)}`
				] = {
					"--tw-square-color": color[variant],
				} as unknown as CSSRuleObject;
			}
		}
	}

	return styles as CSSRuleObject;
};

export const generateSuqareSize = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	const themeSquareSizes = api.theme("bgPatternSquareSize");
	const styles: Record<string, unknown> = {};
	if (themeSquareSizes) {
		for (const key in themeSquareSizes) {
			const width = themeSquareSizes[key] as number;
			styles[`.${api.e(`${opts.prefix}pattern-square-${key}`)}`] = {
				"--tw-square-size": `${width} /* px */`,
			};
		}
	}
	return styles as CSSRuleObject;
};

export const matchSquareSizeAndColors = (api: PluginAPI, opts: IOptions) => ({
	[api.e(`${opts.prefix}pattern-square`)]: (value: string) => {
		const parsed = Number(value);
		if (!Number.isNaN(parsed)) {
			return {
				"--tw-square-size": `${value} /* px */`,
			} as unknown as CSSRuleObject;
		}

		return {
			"--tw-square-color": value,
		} as unknown as CSSRuleObject;
	},
});
