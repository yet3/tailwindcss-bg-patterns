import plugin from "tailwindcss/plugin";
import { LINE_WIDTHS, OFFSETS, SPACING } from "./consts";
import { arrToTwConfig } from "./lib/arrToTwConfig";
import {
	generateLineColors,
	generateLineWidths,
	matchLineWidthsAndColors,
} from "./lib/line";
import { generateOffsets, matchOffsets } from "./lib/offsets";
import { resolveOptions } from "./lib/resolveOptions";
import { generateSpacing, matchSpacing } from "./lib/spacing";
import { generateGridClass } from "./patterns/grid";
import {
	generateHatchingClass,
	genreateHatchingDirection,
} from "./patterns/hatching";
import type { IOptions } from "./types";

export default plugin.withOptions<IOptions | undefined>(
	(options) => (api) => {
		const { addUtilities, matchUtilities, e } = api;
		const opts = resolveOptions(options);

		addUtilities([
			// Patterns
			generateGridClass(e(`${opts.prefix}pattern-grid`)),
			generateHatchingClass(e(`${opts.prefix}pattern-hatching`)),
			generateHatchingClass(e(`${opts.prefix}pattern-cross-hatching`), {
				isCrossHatch: true,
			}),

			// Configs
			generateLineWidths(api, opts),
			generateSpacing(api, opts),
			genreateHatchingDirection(api, opts),
			generateLineColors(api, opts),
			generateOffsets(api, opts),
		]);

		matchUtilities({
			...matchSpacing(api, opts),
			...matchLineWidthsAndColors(api, opts),
			...matchOffsets(api, opts),
		});
	},
	() => ({
		theme: {
			bgPatternLineWidth: arrToTwConfig(LINE_WIDTHS),
			bgPatternSpacing: arrToTwConfig(SPACING),
			bgPatternOffsets: arrToTwConfig(OFFSETS, "px"),
		},
	}),
);
