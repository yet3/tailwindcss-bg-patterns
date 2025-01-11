import plugin from "tailwindcss/plugin";
import { GRID_CELL_SIZE, LINE_WIDTHS, OFFSETS } from "./consts";
import { generateCellSizes, matchCellSize } from "./lib/cellSizes";
import {
	generateLineColors,
	generateLineWidths,
	matchLineWidthsAndColors,
} from "./lib/line";
import { generateOffsets, matchOffsets } from "./lib/offsets";
import { resolveOptions } from "./lib/resolveOptions";
import { generateGridClass } from "./patterns/grid";
import type { IOptions } from "./types";
import { arrToTwConfig } from "./lib/arrToTwConfig";

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
			...matchCellSize(api, opts),
			...matchLineWidthsAndColors(api, opts),
			...matchOffsets(api, opts),
		});
	},
	() => ({
		theme: {
			bgPatternLineWidth: arrToTwConfig(LINE_WIDTHS),
			bgPatternCellSize: arrToTwConfig(GRID_CELL_SIZE),
			bgPatternOffsets: arrToTwConfig(OFFSETS, "px"),
		},
	}),
);
