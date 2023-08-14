import Merge from "files-pipe/Target/Library/Merge.js";
import type { Options as OptionsBase } from "files-pipe/Target/Options/Index.js";
import Default from "files-pipe/Target/Options/Index.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default Merge(Default, {
	Pipe: {},
} satisfies Options) as Options;
