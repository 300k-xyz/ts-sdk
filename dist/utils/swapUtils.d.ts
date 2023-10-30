import { Network } from './network';
export interface CreateOrderParams {
    routeHashes: string[];
    expireTimestamp?: number;
    gasPrice?: string;
    maxPriorityFeePerGas?: string;
    walletAddress: string;
    amountIn: number;
    amountInRaw?: string;
    amountOutMin: number;
    nonce?: number;
    strategyId?: number;
    strategyType?: number;
    traderAddress: string;
    newClientOrderId?: string;
    dynamicGasPrice?: boolean;
    gasSpeed?: 'fast' | 'slow';
    estimateGasOnly?: boolean | 'skip';
}
export declare function createOrder({ network, postBody, apiKey, apiSecret, timeout, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    postBody: CreateOrderParams;
    timeout?: number;
}): Promise<any>;
