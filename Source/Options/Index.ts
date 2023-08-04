import Merge from "files-pipe/dist/Library//Merge.js";
import type { Options as OptionsBase } from "files-pipe/dist/Options/Index.js";
import Defaults from "files-pipe/dist/Options/Index.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default Merge(Defaults, {
	Pipe: {},
} satisfies Options) as Options;
