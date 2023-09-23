import type { Option as _Option } from "files-pipe";
export interface Option extends _Option {
    [key: string]: any;
}
declare const _default: Omit<{} & {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Action: Omit<{} & {
        Read: (On: import("files-pipe").File) => Promise<string>;
        Wrote: (On: import("files-pipe").File) => Promise<import("files-pipe").Buffer>;
        Passed: (On: import("files-pipe").File) => Promise<boolean>;
        Failed: (On: import("files-pipe").File) => Promise<string>;
        Accomplished: (On: import("files-pipe").File) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan").Type) => Promise<string | false>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan").Type) => Promise<import("files-pipe/Target/Interface/Plan").Type>;
    }, "__proto__">;
    Logger: 2;
}, "__proto__">;
export default _default;
