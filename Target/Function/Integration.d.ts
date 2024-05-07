/**
 * @module Integration
 *
 */
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integraton.js";
export declare const Default: Omit<{} & {
    File: string;
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: number;
    Action: Omit<{} & {
        Read: ({ Input: e }: {
            Input: any;
        }) => Promise<string>;
        Wrote: ({ Buffer: e }: {
            Buffer: any;
        }) => Promise<any>;
        Passed: (e: any) => Promise<any>;
        Failed: ({ Input: e }: {
            Input: any;
        }) => Promise<string>;
        Accomplished: ({ Input: e, Output: a }: {
            Input: any;
            Output: any;
        }) => Promise<string>;
        Fulfilled: ({ File: e }: {
            File: any;
        }) => Promise<string | false>;
        Changed: (e: any) => Promise<any>;
    }, "__proto__">;
    Exclude: boolean;
}, "__proto__">;
export declare const Merge: import("@playform/build/Target/Interface/Merge.js").default<import("@playform/build/Target/Interface/Merge.js").Generic>;
