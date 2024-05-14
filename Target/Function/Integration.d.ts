/**
 * @module Integration
 *
 */
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
