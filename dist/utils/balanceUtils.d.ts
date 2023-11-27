import { Network } from './network';
export declare function getErc20Balance({ network, query, apiKey, apiSecret, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    query: {
        walletAddress: string;
        erc20TokenAddress: string;
    };
}): Promise<string>;
export declare function getGasBalance({ network, query, apiKey, apiSecret, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    query: {
        traderAddress: string;
    };
}): Promise<string>;
export declare function getErc20Allowance({ network, query, apiKey, apiSecret, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    query: {
        walletAddress: string;
        contractAddress: string;
        erc20TokenAddress: string;
    };
}): Promise<string>;
export declare function getNonce({ network, query, apiKey, apiSecret, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    query: {
        address: string;
    };
}): Promise<number>;
export declare function getGasPrice({ network, apiKey, apiSecret, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
}): Promise<string>;
