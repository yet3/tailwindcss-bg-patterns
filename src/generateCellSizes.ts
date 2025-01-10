import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
import type { IOptions } from "./types";

export const generateCellSizes = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	const themeCellSizes = api.theme("bgPatternCellSize");
	const styles: Record<string, unknown> = {};
	if (themeCellSizes) {
		for (const key in themeCellSizes) {
			const size = themeCellSizes[key];
			styles[`.${api.e(`${opts.prefix}pattern-cell-${key}`)}`] = {
				"--tw-cell-size": `${size} /* px */`,
			};
		}
	}
	return styles as CSSRuleObject;
};
