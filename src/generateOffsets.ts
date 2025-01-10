import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
import type { IOptions } from "./types";

export const generateOffsets = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	const offsets = api.theme("bgPatternOffsets");
	const styles: Record<string, unknown> = {};
	if (offsets) {
		for (const key in offsets) {
			const offset = offsets[key];
			styles[`.${api.e(`${opts.prefix}pattern-offset-x-${key}`)}`] = {
				"--tw-offset-x": offset,
			} as unknown as CSSRuleObject;
			styles[`.${api.e(`${opts.prefix}pattern-offset-y-${key}`)}`] = {
				"--tw-offset-y": offset,
			} as unknown as CSSRuleObject;
		}
	}
	return styles as CSSRuleObject;
};
