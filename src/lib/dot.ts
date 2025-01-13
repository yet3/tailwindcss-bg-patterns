import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
import type { IOptions } from "../types";

export const generateDotColors = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	const colors = api.theme("backgroundColor");
	const styles: Record<string, unknown> = {};

	for (const colorKey in colors) {
		const color = colors[colorKey] as string | Record<string, string>;

		if (typeof color === "string") {
			styles[`.${api.e(`${opts.prefix}pattern-dot-${colorKey}`)}`] = {
				"--tw-dot-color": color,
			} as unknown as CSSRuleObject;
		} else {
			for (const variant in color) {
				styles[
					`.${api.e(`${opts.prefix}pattern-dot-${colorKey}-${variant}`)}`
				] = {
					"--tw-dot-color": color[variant],
				} as unknown as CSSRuleObject;
			}
		}
	}

	return styles as CSSRuleObject;
};

export const generateDotSize = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	const themeDotsSizes = api.theme("bgPatternDotSize");
	const styles: Record<string, unknown> = {};
	if (themeDotsSizes) {
		for (const key in themeDotsSizes) {
			const width = themeDotsSizes[key] as number;
			styles[`.${api.e(`${opts.prefix}pattern-dot-${key}`)}`] = {
				"--tw-dot-size": `${width} /* px */`,
			};
		}
	}
	return styles as CSSRuleObject;
};

export const matchDotSizeAndColors = (api: PluginAPI, opts: IOptions) => ({
	[api.e(`${opts.prefix}pattern-dot`)]: (value: string) => {
		const parsed = Number(value);
		if (!Number.isNaN(parsed)) {
			return {
				"--tw-dot-size": `${value} /* px */`,
			} as unknown as CSSRuleObject;
		}

		return {
			"--tw-dot-color": value,
		} as unknown as CSSRuleObject;
	},
});
