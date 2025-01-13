import type { CSSRuleObject } from "tailwindcss/types/config";

interface IOpts {
	dotSize: number;
	spacing: number;
	offsetX: number;
	offsetY: number;

	isHexagonal: boolean;

	dotColor: string;
}

export const generatePolkaDotClass = (
	className: string,
	_opts?: Partial<IOpts>,
): CSSRuleObject => {
	const opts: IOpts = {
		dotSize: 8,
		spacing: 24,
		offsetX: 0,
		offsetY: 0,
		isHexagonal: false,
		dotColor: "#ffffff",
		..._opts,
	};

	let bgImageCode =
		"radial-gradient(var(--tw-dot-color) var(--tw-gradient-stop),transparent var(--tw-gradient-stop))";
	let bgPosCode = "var(--tw-offset-x) var(--tw-offset-y)";
	const gradientStopCode = "calc(70.5% * (var(--tw-dot-size) / var(--tw-dot-unit)))";
	const bgSizeCode = "calc(var(--tw-dot-unit) * 1px)";
	let varsCode: CSSRuleObject = {
		"--tw-dot-unit": "calc(var(--tw-dot-size) + var(--tw-spacing))",
	};

	if (opts.isHexagonal) {
		varsCode = {
			"--tw-spacing-final":
				"calc(var(--tw-spacing) + var(--tw-dot-size) * 0.42)",
			"--tw-dot-unit": "calc(var(--tw-dot-size) + var(--tw-spacing-final))",
			"--tw-2d-offset-base": "calc((var(--tw-dot-unit) / 2) * 1px)",
		};

		bgPosCode =
			"var(--tw-offset-x) var(--tw-offset-y), calc(var(--tw-2d-offset-base) + var(--tw-offset-x)) calc(var(--tw-2d-offset-base) + var(--tw-offset-y))";
		bgImageCode =
			"radial-gradient(var(--tw-dot-color) var(--tw-gradient-stop),transparent var(--tw-gradient-stop)),radial-gradient(var(--tw-dot-color) var(--tw-gradient-stop), transparent var(--tw-gradient-stop))";
	}

	return {
		[`.${className}`]: {
			"--tw-dot-size": opts.dotSize.toString(),
			"--tw-spacing": opts.spacing.toString(),
			"--tw-offset-x": `${opts.offsetX * -1}px`,
			"--tw-offset-y": `${opts.offsetY * -1}px`,
			"--tw-dot-color": opts.dotColor,

			...varsCode,
			"--tw-gradient-stop": gradientStopCode,
			backgroundImage: bgImageCode,
			"--tw-bg-size": bgSizeCode,
			backgroundSize: "var(--tw-bg-size) var(--tw-bg-size)",
			backgroundPosition: bgPosCode,
		},
	};
};
