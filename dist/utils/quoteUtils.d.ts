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
export declare type QuoteArr = [number, number, string, string, number];
export interface OrderbookResponse {
    symbol: string;
    amountUSD: number;
    lastUpdateTs: number;
    asks?: QuoteArr[];
    bids?: QuoteArr[];
}
export declare function getOrderBook({ network, query, apiKey, apiSecret, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    query: {
        symbol: string;
        side: 'bid' | 'ask';
        amountUSD?: number;
        amountQuote?: number;
    };
}): Promise<OrderbookResponse>;
