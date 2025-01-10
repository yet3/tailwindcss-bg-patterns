import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
import type { IOptions } from "./types";

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
