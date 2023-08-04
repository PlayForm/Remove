import Merge from "files-pipe/dist/Lib/Merge.js";
import type { Options as OptionsBase } from "files-pipe/dist/options/Index.js";
import Defaults from "files-pipe/dist/options/Index.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default Merge(Defaults, {
	Pipe: {},
} satisfies Options) as Options;
