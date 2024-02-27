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
    'linea' = "linea"
}
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    OPTIMISM = 10,
    OPTIMISTIC_KOVAN = 69,
    BSC = 56,
    ARBITRUM_ONE = 42161,
    ARBITRUM_RINKEBY = 421611,
    POLYGON = 137,
    POLYGON_MUMBAI = 80001,
    CELO = 42220,
    CELO_ALFAJORES = 44787,
    GNOSIS = 100,
    MOONBEAM = 1284,
    AVALANCHE = 43114,
    MANTA_PACIFIC = 169,
    METIS = 1088,
    BASE = 8453,
    MANTLE = 5000,
    LINEA = 59144
}
export declare function getChainIdFromNetwork(network: Network): ChainId.MAINNET | ChainId.OPTIMISM | ChainId.BSC | ChainId.ARBITRUM_ONE | ChainId.POLYGON | ChainId.CELO | ChainId.AVALANCHE | ChainId.MANTA_PACIFIC | ChainId.METIS | ChainId.BASE | ChainId.MANTLE | ChainId.LINEA;
export declare function getNetworkFromChainId(chainId: ChainId): Network;
