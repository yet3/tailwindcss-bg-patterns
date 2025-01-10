import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
import type { IOptions } from "./types";

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
