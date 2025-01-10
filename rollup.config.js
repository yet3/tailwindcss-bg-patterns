import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import analyze from "rollup-plugin-analyzer";

export default defineConfig({
	input: "src/index.ts",
	external: ["tailwindcss/plugin"],
	output: [
		{
			file: "dist/index.mjs",
			format: "es",
		},
		{
			file: "dist/index.js",
			format: "cjs",
		},
	],
	plugins: [typescript({ exclude: ["tests/**/*.ts"] }), terser(), analyze()],
});
