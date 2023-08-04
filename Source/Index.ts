import type { AstroIntegration } from "astro";
import deepmerge from "files-pipe/dist/Lib/Merge.js";
import type { optionPath } from "files-pipe/dist/options/Index.js";
import type { Options } from "./options/Index.js";
import defaults from "./options/Index.js";

export default (Options: Options = {}): AstroIntegration => {
	for (const Option in Options) {
		if (
			Object.prototype.hasOwnProperty.call(Options, Option) &&
			Options[Option] === true
		) {
			Options[Option] = defaults[Option];
		}
	}

	const _options = deepmerge(defaults, Options);

	const paths = new Set<optionPath>();

	if (typeof _options["path"] !== "undefined") {
		if (
			_options["path"] instanceof Array ||
			_options["path"] instanceof Set
		) {
			for (const path of _options["path"]) {
				paths.add(path);
			}
		}
	}

	return {
		name: "astro-dead-links",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				if (!paths.size) {
					paths.add(dir);
				}
			},
		},
	};
};
