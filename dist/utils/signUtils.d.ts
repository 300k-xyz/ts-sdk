type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';
export declare function create300kSignature({ ts, method, path, apiSecret, postData, }: {
    ts: number;
    method: Method;
    path: string;
    apiSecret: string;
    postData?: any;
}): string;
export declare function create300kApiHeader({ method, path, apiKey, apiSecret, postData, ts: tsOverride, }: {
    method: Method;
    path: string;
    apiKey: string;
    apiSecret: string;
    postData?: any;
    ts?: number;
}): {
    'X-APIKEY': string;
    'X-TS': number;
    'X-SIGNATURE': string;
};
export {};
