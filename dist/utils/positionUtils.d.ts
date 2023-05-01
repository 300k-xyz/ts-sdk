import { Network } from './network';
export declare function createPosition({ network, postBody, apiKey, apiSecret, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    postBody: {
        traderAddress: string;
        walletAddress: string;
        token0: string;
        token1: string;
        amount0Desired: number;
        amount1Desired: number;
        priceLower: string;
        priceUpper: string;
        fee: number;
        burnPositionId?: number;
        newClientOrderId?: string;
        gasPrice?: string;
        maxPriorityFeePerGas?: string;
        estimateGasOnly?: boolean;
        strategyId?: number;
        strategyType?: number;
    };
}): Promise<any>;
export declare function getPositionDetails({ network, walletAddress, apiKey, apiSecret, }: {
    network: string;
    walletAddress: string;
    apiKey: string;
    apiSecret: string;
}): Promise<any>;
export declare function removeLiquidityAndBurn({ network, postBody, apiKey, apiSecret, }: {
    apiKey: string;
    apiSecret: string;
    network: Network;
    postBody: {
        positionId: number;
        walletAddress: string;
        traderAddress: string;
        newClientOrderId?: string;
        nonce?: number;
        gasPrice?: string;
        maxPriorityFeePerGas?: string;
        estimateGasOnly?: boolean;
        strategyId?: number;
        strategyType?: number;
    };
}): Promise<any>;
