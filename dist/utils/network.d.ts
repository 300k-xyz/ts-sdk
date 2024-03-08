export declare enum Network {
    'ethereum' = "ethereum",
    'arbitrum' = "arbitrum",
    'polygon' = "polygon",
    'bsc' = "bsc",
    'celo' = "celo",
    'optimism' = "optimism",
    'avalanche' = "avalanche",
    'mantap' = "mantap",
    'metis' = "metis",
    'base' = "base",
    'mantle' = "mantle",
    'linea' = "linea",
    'zksync' = "zksync",
    'blast' = "blast"
}
export declare const networkToChainIdMap: Record<Network, number>;
export declare function getChainIdFromNetwork(network: Network): number;
export declare function getNetworkFromChainId(chainId: number): Network;
