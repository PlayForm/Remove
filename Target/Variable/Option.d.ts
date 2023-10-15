/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Exclude: false;
    Files: string;
    Action: Omit<{} & {
        Read: (On: import("files-pipe/Target/Interface/File").default) => Promise<string>;
        Wrote: (On: import("files-pipe/Target/Interface/File").default) => Promise<import("files-pipe/Target/Interface/Buffer").Type>;
        Passed: (On: import("files-pipe/Target/Interface/File").default) => Promise<boolean>;
        Failed: (On: import("files-pipe/Target/Interface/File").default) => Promise<string>;
        Accomplished: (On: import("files-pipe/Target/Interface/File").default) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan").default) => Promise<string | false>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan").default) => Promise<import("files-pipe/Target/Interface/Plan").default>;
    }, "__proto__">;
    Logger: 2;
}, "__proto__">;
export default _default;
