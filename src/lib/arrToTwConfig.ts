export const arrToTwConfig = (arr: number[], unit = "") => {
	const obj: Record<string, string> = {};

	for (const val of arr) {
		obj[val] = val + unit;
	}

	return obj;
};
