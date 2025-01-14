import plugin from "tailwindcss/plugin";
import { DOT_SIZES, LINE_WIDTHS, OFFSETS, SPACING } from "./consts";
import { arrToTwConfig } from "./lib/arrToTwConfig";
import {
	generateDotColors,
	generateDotSize,
	matchDotSizeAndColors,
} from "./lib/dot";
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
import { generateLinesClass } from "./patterns/lines";
import { generatePolkaDotClass } from "./patterns/polkaDot";
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

			generatePolkaDotClass(e(`${opts.prefix}pattern-polka-dot`)),
			generatePolkaDotClass(e(`${opts.prefix}pattern-hex-polka-dot`), {
				isHexagonal: true,
			}),

			generateLinesClass(e(`${opts.prefix}pattern-x-lines`), {
				angle: 0,
			}),
			generateLinesClass(e(`${opts.prefix}pattern-y-lines`), {
				angle: 90,
			}),

			// Configs
			generateLineWidths(api, opts),
			generateLineColors(api, opts),
			generateDotSize(api, opts),
			generateDotColors(api, opts),
			generateSpacing(api, opts),
			genreateHatchingDirection(api, opts),
			generateOffsets(api, opts),
		]);

		matchUtilities({
			...matchSpacing(api, opts),
			...matchLineWidthsAndColors(api, opts),
			...matchDotSizeAndColors(api, opts),
			...matchOffsets(api, opts),
		});
	},
	() => ({
		theme: {
			bgPatternLineWidth: arrToTwConfig(LINE_WIDTHS),
			bgPatternDotSize: arrToTwConfig(DOT_SIZES),
			bgPatternSpacing: arrToTwConfig(SPACING),
			bgPatternOffsets: arrToTwConfig(OFFSETS, "px"),
		},
	}),
);
