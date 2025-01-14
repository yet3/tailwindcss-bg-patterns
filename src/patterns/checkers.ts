import type { CSSRuleObject } from "tailwindcss/types/config";

interface IOpts {
	squareSize: number;
	offsetX: number;
	offsetY: number;

	squareColor: string;
}

export const generateCheckersClass = (
	className: string,
	opts: IOpts = {
		squareColor: "#ffffff",
		squareSize: 32,
		offsetX: 0,
		offsetY: 0,
	},
): CSSRuleObject => {
	return {
		[`.${className}`]: {
			"--tw-square-size": opts.squareSize.toString(),
			"--tw-offset-x": `${opts.offsetX}px`,
			"--tw-offset-y": `${opts.offsetY}px`,
			"--tw-square-color": opts.squareColor,

			"--tw-unit": "calc(var(--tw-square-size) * 1px)",
			"--tw-total-size": "calc(var(--tw-unit) * 2)",
			backgroundImage: `
        linear-gradient(45deg, var(--tw-square-color) 25%, transparent 25%),
        linear-gradient(-45deg, var(--tw-square-color) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--tw-square-color) 75%),
        linear-gradient(-45deg, transparent 75%, var(--tw-square-color) 75%)
      `,
			backgroundSize: "var(--tw-total-size) var(--tw-total-size)",
			backgroundPosition:
				"var(--tw-offset-x) var(--tw-offset-y), var(--tw-offset-x) calc(var(--tw-offset-y) + var(--tw-unit)), calc(var(--tw-offset-x) + var(--tw-unit)) calc(var(--tw-offset-y) - var(--tw-unit)), calc(var(--tw-offset-x) - var(--tw-unit)) var(--tw-offset-y)",
		} as unknown as CSSRuleObject,
	};
};
