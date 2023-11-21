import { Network } from './network';
export type QuoteArr = [number, number, string, string, number, string[], string[]];
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
export interface QuoteResponse {
    blockNumber: string;
    amount: string;
    amountDecimals: string;
    quote: string;
    quoteDecimals: string;
    quoteGasAdjusted: string;
    quoteGasAdjustedDecimals: string;
    gasUseEstimateQuote: string;
    gasUseEstimateQuoteDecimals: string;
    gasUseEstimate: string;
    gasUseEstimateUSD: string;
    simulationStatus: string;
    simulationError: boolean;
    gasPriceWei: string;
    route: Route[][];
    allRoutes: [number, number, string, string, number][];
    routeString: string;
    quoteId: string;
    rawTxPartial: RawTxPartial;
}
export interface Route {
    type: string;
    address: string;
    tokenIn: TokenInfo;
    tokenOut: TokenInfo;
    reserve0?: ReserveInfo;
    reserve1?: ReserveInfo;
    amountIn: string;
    amountOut: string;
    tickCurrent?: string;
    liquidity?: string;
    sqrtRatioX96?: string;
    fee?: string;
}
export interface TokenInfo {
    chainId: number;
    decimals: string;
    address: string;
    symbol: string;
}
export interface ReserveInfo {
    token: TokenInfo;
    quotient: string;
}
export interface RawTxPartial {
    to: string;
    data: string;
}
export declare function getQuote({ network, query, apiKey, apiSecret, timeout, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    query: {
        tokenInAddress: string;
        tokenOutAddress: string;
        amount: string;
        maxAllowedSlippage?: string;
    };
    timeout?: number;
}): Promise<QuoteResponse>;
