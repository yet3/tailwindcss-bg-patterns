import { DEFAULT_OPTS } from "./consts";
import type { IOptions, IResolvedOpts } from "./types";

export const resolveOptions = (
	opts: IOptions | undefined | null,
): IResolvedOpts => {
	if (!opts) return DEFAULT_OPTS;

	const tmp: Record<string, unknown> = {};
	for (const key in DEFAULT_OPTS) {
		if (opts[key as keyof IOptions] == null) {
			tmp[key] = DEFAULT_OPTS[key as keyof IOptions];
		}
		tmp[key] = opts[key as keyof IOptions];
	}
	return tmp as IResolvedOpts;
};
