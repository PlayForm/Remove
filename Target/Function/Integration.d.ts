/**
 * @module Integration
 *
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Integraton.js";
export declare const Default: Omit<{} & {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: Omit<{} & {
        Read: ({ Input }: any) => Promise<string>;
        Wrote: ({ Buffer }: any) => Promise<any>;
        Passed: (On: any) => Promise<true>;
        Failed: ({ Input }: any) => Promise<string>;
        Accomplished: ({ Input, Output }: any) => Promise<string>;
        Fulfilled: ({ File }: any) => Promise<string | false>;
        Changed: (Plan: any) => Promise<any>;
    }, "__proto__">;
    File: string;
    Exclude: false;
}, "__proto__">;
export declare const Merge: import("@playform/build/Target/Interface/Merge.js").default<import("@playform/build/Target/Interface/Merge.js").Generic>;
