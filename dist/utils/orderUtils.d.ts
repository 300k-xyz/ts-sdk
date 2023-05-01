import { Network } from './network';
export declare function getOrderHistory({ apiKey, apiSecret, network, query, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    query: {
        walletAddress: string;
        startTime?: number;
        endTime?: number;
        limit?: number;
        tokenInSymbol?: string;
        tokenOutSymbol?: string;
    };
}): Promise<any>;
