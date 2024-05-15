/**
 * @module Integration
 *
 */
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
