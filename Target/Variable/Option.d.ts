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
    Logger: 2;
    Action: Omit<{} & {
        Read: ({ Input }: import("@playform/pipe/Target/Interface/File").default) => Promise<string>;
        Wrote: ({ Buffer }: import("@playform/pipe/Target/Interface/File").default) => Promise<import("@playform/pipe/Target/Type/Buffer").Type>;
        Passed: (On: import("@playform/pipe/Target/Interface/File").default) => Promise<true>;
        Failed: ({ Input }: import("@playform/pipe/Target/Interface/File").default) => Promise<string>;
        Accomplished: ({ Input, Output }: import("@playform/pipe/Target/Interface/File").default) => Promise<string>;
        Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan").default) => Promise<string | false>;
        Changed: (Plan: import("@playform/pipe/Target/Interface/Plan").default) => Promise<import("@playform/pipe/Target/Interface/Plan").default>;
    }, "__proto__">;
    File: string;
    Exclude: false;
}, "__proto__">;
export default _default;
