/**
 * @module Integration
 *
 */
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
declare const _default: (Option: import("@playform/pipe/Target/Interface/Option.js").default) => {
    name: string;
    hooks: {
        "astro:build:done": ({ dir }: {
            pages: {
                pathname: string;
            }[];
            dir: URL;
            routes: import("astro").RouteData[];
            logger: import("astro").AstroIntegrationLogger;
            cacheManifest: boolean;
        }) => void;
    };
};
export default _default;
export declare const Default: any;
export declare const Merge: any;
=======
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integraton.js";
export declare const Default: any;
export declare const Merge: Interface<Generic>;
>>>>>>> c5e311607f46e35736c59843f04e4850fb9290fd
>>>>>>> 6c5b578f53d1c28a0b8a8e76678f3fc52fb08174
