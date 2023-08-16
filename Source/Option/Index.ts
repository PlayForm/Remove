import type { Option as _Option } from "files-pipe";
import { Default, Merge } from "files-pipe";

export interface Options extends _Option {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default Merge(Default, {
	Pipe: {},
} satisfies Options) as Options;
