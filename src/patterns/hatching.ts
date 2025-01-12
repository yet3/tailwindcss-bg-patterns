import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";
import type { IOptions } from "../types";

interface IOpts {
	lineSize: number;
	spacing: number;
	offsetX: number;
	offsetY: number;
	isCrossHatch: boolean;
	isRightLeaning: boolean;
	lineColor: string;
}

export const generateHatchingClass = (
	className: string,
	_opts?: Partial<IOpts>,
): CSSRuleObject => {
	const opts: IOpts = {
		lineSize: 1,
		lineColor: "#ffffff",
		spacing: 12,
		offsetX: 0,
		offsetY: 0,
		isCrossHatch: false,
		isRightLeaning: false,
		..._opts,
	};

	let bgImageCode = `linear-gradient(
      var(--tw-hatching-angle),
      transparent var(--tw-1st-start-stop),
      var(--tw-line-color) var(--tw-1st-start-stop),
      var(--tw-line-color) var(--tw-1st-end-stop),
      transparent var(--tw-1st-end-stop),
      transparent 100%
    ),
    linear-gradient(
      var(--tw-hatching-angle),
      transparent var(--tw-2ed-start-stop),
      var(--tw-line-color) var(--tw-2ed-start-stop),
      var(--tw-line-color) var(--tw-2ed-end-stop),
      transparent var(--tw-2ed-end-stop),
      transparent 100%
    )
  `;

	if (opts.isCrossHatch) {
		bgImageCode += `, linear-gradient(
			calc(var(--tw-hatching-angle) * -1),
			transparent var(--tw-1st-start-stop),
			var(--tw-line-color) var(--tw-1st-start-stop),
			var(--tw-line-color) var(--tw-1st-end-stop),
			transparent var(--tw-1st-end-stop),
			transparent 100%
		),
		linear-gradient(
			calc(var(--tw-hatching-angle) * -1),
			transparent var(--tw-2ed-start-stop),
			var(--tw-line-color) var(--tw-2ed-start-stop),
			var(--tw-line-color) var(--tw-2ed-end-stop),
			transparent var(--tw-2ed-end-stop),
			transparent 100%
		)`;
	}

	return {
		[`.${className}`]: {
			"--tw-line-size": opts.lineSize.toString(),
			"--tw-spacing": opts.spacing.toString(),
			"--tw-offset-x": `${opts.offsetX * -1}px`,
			"--tw-offset-y": `${opts.offsetY * -1}px`,
			"--tw-hatching-angle": `${opts.isRightLeaning ? -45 : 45}deg`,
			"--tw-line-color": opts.lineColor,

			"--tw-unit": "calc((var(--tw-line-size) + var(--tw-spacing)) * 2)",
			"--tw-line-stop":
				"calc((var(--tw-line-size) / var(--tw-unit) * 100%) / 2)",
			"--tw-1st-start-stop": "calc(75% - var(--tw-line-stop))",
			"--tw-1st-end-stop": "calc(75% + var(--tw-line-stop))",
			"--tw-2ed-start-stop": "calc(25% - var(--tw-line-stop))",
			"--tw-2ed-end-stop": "calc(25% + var(--tw-line-stop))",
			backgroundImage: bgImageCode,
			backgroundSize: "calc(var(--tw-unit) * 1px) calc(var(--tw-unit) * 1px)",
			backgroundPosition:
				"calc(var(--tw-spacing) * -0.5px + var(--tw-offset-x)) var(--tw-offset-y)",
		},
	};
};

export const genreateHatchingDirection = (
	api: PluginAPI,
	opts: IOptions,
): CSSRuleObject => {
	return {
		[`.${api.e(`${opts.prefix}pattern-hatching-left-to-right`)}`]: {
			"--tw-hatching-angle": "45deg",
		},
		[`.${api.e(`${opts.prefix}pattern-hatching-right-to-left`)}`]: {
			"--tw-hatching-angle": "-45deg",
		},
	} as unknown as CSSRuleObject;
};
