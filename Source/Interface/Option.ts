import type Option from "files-pipe/Target/Interface/Option.js";

export default interface Type extends Option {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}