import { Network } from './network';
export interface V3Position {
    tokenId: number;
    nonce: string;
    operator: string;
    token0: string;
    token1: string;
    fee: number;
    tickLower: number;
    tickUpper: number;
    liquidity: string;
    feeGrowthInside0LastX128: string;
    feeGrowthInside1LastX128: string;
    tokensOwed0: string;
    tokensOwed1: string;
    token0Symbol: string;
    token1Symbol: string;
    token0Decimals: number;
    token1Decimals: number;
    priceLower: string;
    priceUpper: string;
    price: string;
    priceLowerInvert: string;
    priceUpperInvert: string;
    priceInvert: string;
    amount0: string;
    amount1: string;
    sqrtPriceX96: string;
    tick: number;
    poolAddress: string;
    unclaimedFee0?: string;
    unclaimedFee1?: string;
    owner?: string;
}
export interface CreatePositionResponse {
    blockHash: string;
    blockNumber: number;
    contractAddress: any;
    cumulativeGasUsed: number;
    effectiveGasPrice: number;
    from: string;
    gasUsed: number;
    logsBloom: string;
    status: boolean;
    to: string;
    transactionHash: string;
    transactionIndex: number;
    type: string;
    events: any;
}
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
}): Promise<CreatePositionResponse>;
export declare function getPositionDetail({ network, tokenId, apiKey, apiSecret, withUnclaimedFees, }: {
    network: string;
    tokenId: number;
    withUnclaimedFees?: boolean;
    apiKey: string;
    apiSecret: string;
}): Promise<V3Position>;
export declare function getPositionDetails({ network, walletAddress, withUnclaimedFees, apiKey, apiSecret, }: {
    network: string;
    walletAddress: string;
    withUnclaimedFees?: boolean;
    apiKey: string;
    apiSecret: string;
}): Promise<V3Position[]>;
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
