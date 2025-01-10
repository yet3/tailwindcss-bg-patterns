import type { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

interface IOpts {
	lineSize: number;
	cellSize: number;
	offsetX: number;
	offsetY: number;

	lineColor: string;
}

export const generateGridClass = (
	className: string,
	opts: IOpts = {
		lineColor: "#ffffff",
		lineSize: 1,
		cellSize: 24,
		offsetX: 0,
		offsetY: 0,
	},
): CSSRuleObject => {
	return {
		[`.${className}`]: {
			"--tw-line-size": opts.lineSize.toString(),
			"--tw-cell-size": opts.cellSize.toString(),
			"--tw-offset-x": `${opts.offsetX * -1}px`,
			"--tw-offset-y": `${opts.offsetY * -1}px`,
			"--tw-line-color": opts.lineColor,

			"--tw-unit": "calc(var(--tw-line-size) + var(--tw-cell-size))",
			"--tw-line-stop":
				"calc((var(--tw-line-size) / var(--tw-unit) * 100%) / 2)",
			"--tw-line-start-stop": "calc(50% - var(--tw-line-stop))",
			"--tw-line-end-stop": "calc(50% + var(--tw-line-stop))",
			backgroundImage: `linear-gradient(
          0deg,
          transparent var(--tw-line-start-stop),
          var(--tw-line-color) var(--tw-line-start-stop),
          var(--tw-line-color) var(--tw-line-end-stop),
          transparent var(--tw-line-end-stop),
          transparent 100%
        ),
        linear-gradient(
          90deg,
          transparent var(--tw-line-start-stop),
          var(--tw-line-color) var(--tw-line-start-stop),
          var(--tw-line-color) var(--tw-line-end-stop),
          transparent var(--tw-line-end-stop),
          transparent 100%
        )`,
			backgroundSize: "calc(var(--tw-unit) * 1px) calc(var(--tw-unit) * 1px)",
			backgroundPosition: "var(--tw-offset-x) var(--tw-offset-y)",
		} as unknown as CSSRuleObject,
	};
};
