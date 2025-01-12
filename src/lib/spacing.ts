import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
import type { IOptions } from "../types";

export const generateSpacing = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	const spacing = api.theme("bgPatternSpacing");
	const styles: Record<string, unknown> = {};
	if (spacing) {
		for (const key in spacing) {
			const value = spacing[key];
			styles[`.${api.e(`${opts.prefix}pattern-spacing-${key}`)}`] = {
				"--tw-spacing": `${value} /* px */`,
			} as unknown as CSSRuleObject;
		}
	}
	return styles as CSSRuleObject;
};

export const matchSpacing = (api: PluginAPI, opts: IOptions) => ({
	[api.e(`${opts.prefix}pattern-spacing`)]: (value: string) => {
		return {
			"--tw-spacing": `${value} /* px */`,
		} as unknown as CSSRuleObject;
	}
});
