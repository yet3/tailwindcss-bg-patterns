import plugin from "tailwindcss/plugin";
import type { CSSRuleObject } from "tailwindcss/types/config";
import { GRID_CELL_SIZE, LINE_WIDTHS, OFFSETS, arrToObj } from "./consts";
import { generateCellSizes } from "./generateCellSizes";
import { generateLineColors } from "./generateLineColors";
import { generateLineWidths } from "./generateLineWidths";
import { generateOffsets } from "./generateOffsets";
import { generateGridClass } from "./patterns/grid";
import { resolveOptions } from "./resolveOptions";
import type { IOptions } from "./types";

export default plugin.withOptions<IOptions | undefined>(
	(options) => (api) => {
		const { addUtilities, matchUtilities, e } = api;
		const opts = resolveOptions(options);

		addUtilities([
			generateGridClass(e(`${opts.prefix}pattern-grid`)),
			generateLineWidths(api, opts),
			generateCellSizes(api, opts),
			generateLineColors(api, opts),
			generateOffsets(api, opts),
		]);

		matchUtilities({
			[e(`${opts.prefix}pattern-line`)]: (value) => {
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
			[e(`${opts.prefix}pattern-cell`)]: (value) => {
				return {
					"--tw-cell-size": `${value} /* px */`,
				} as unknown as CSSRuleObject;
			},
			[e(`${opts.prefix}pattern-offset-x`)]: (value) => {
				return {
					"--tw-offset-x": value,
				} as unknown as CSSRuleObject;
			},
			[e(`${opts.prefix}pattern-offset-y`)]: (value) => {
				return {
					"--tw-offset-y": value,
				} as unknown as CSSRuleObject;
			},
		});
	},
	() => ({
		theme: {
			bgPatternLineWidth: arrToObj(LINE_WIDTHS),
			bgPatternCellSize: arrToObj(GRID_CELL_SIZE),
			bgPatternOffsets: arrToObj(OFFSETS, "px"),
		},
	}),
);

