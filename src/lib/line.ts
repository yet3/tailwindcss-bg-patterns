import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
import type { IOptions } from "../types";

export const generateLineColors = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	const colors = api.theme("backgroundColor");
	const styles: Record<string, unknown> = {};

	for (const colorKey in colors) {
		const color = colors[colorKey] as string | Record<string, string>;

		if (typeof color === "string") {
			styles[`.${api.e(`${opts.prefix}pattern-line-${colorKey}`)}`] = {
				"--tw-line-color": color,
			} as unknown as CSSRuleObject;
		} else {
			for (const variant in color) {
				styles[
					`.${api.e(`${opts.prefix}pattern-line-${colorKey}-${variant}`)}`
				] = {
					"--tw-line-color": color[variant],
				} as unknown as CSSRuleObject;
			}
		}
	}

	return styles as CSSRuleObject;
};

export const generateLineWidths = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	const themeLineWidths = api.theme("bgPatternLineWidth");
	const styles: Record<string, unknown> = {};
	if (themeLineWidths) {
		for (const key in themeLineWidths) {
			const width = themeLineWidths[key] as number;
			styles[`.${api.e(`${opts.prefix}pattern-line-${key}`)}`] = {
				"--tw-line-size": `${width} /* px */`,
			};
		}
	}
	return styles as CSSRuleObject;
};

export const matchLineWidthsAndColors = (api: PluginAPI, opts: IOptions) => ({
	[api.e(`${opts.prefix}pattern-line`)]: (value: string) => {
		const parsed = Number(value);
		if (!Number.isNaN(parsed)) {
			return {
				"--tw-line-size": `${value} /* px */`,
			} as unknown as CSSRuleObject;
		}

		return {
			"--tw-line-color": value,
		} as unknown as CSSRuleObject;
	},
});
