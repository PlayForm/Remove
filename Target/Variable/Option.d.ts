/**
 * @module Option
 *
 */
<<<<<<< HEAD
declare const _default: Omit<{} & {
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
=======
declare const _default: any;
>>>>>>> 6c5b578f53d1c28a0b8a8e76678f3fc52fb08174
export default _default;
