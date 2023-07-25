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
