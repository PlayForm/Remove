import type { AstroIntegration } from "astro";
import { deepmerge } from "deepmerge-ts";

import defaultOptions, { Options } from "./options/index.js";

export default (options: Options = {}): AstroIntegration => {
	const _options = deepmerge(defaultOptions(), options);

	_options.url = _options.url?.endsWith("/")
		? _options.url
		: `${_options.url}/`;

	return {
		name: "astro-dead-urls",
		hooks: {
			"astro:build:done": async () => {},
		},
	};
};
