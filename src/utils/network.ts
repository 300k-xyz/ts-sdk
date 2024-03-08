export enum Network {
  'ethereum' = 'ethereum',
  'arbitrum' = 'arbitrum',
  'polygon' = 'polygon',
  'bsc' = 'bsc',
  'celo' = 'celo',
  'optimism' = 'optimism',
  'avalanche' = 'avalanche',
  'mantap' = 'mantap',
  'metis' = 'metis',
  'base' = 'base',
  'mantle' = 'mantle',
  'linea' = 'linea',
  'zksync' = 'zksync',
  'blast' = 'blast',
}

export enum ChainId {
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
  LINEA = 59144,
  ZKSYNC = 324,
  BLAST = 81457,
}

export function getChainIdFromNetwork(network: Network) {
  switch (network) {
    case Network.ethereum:
      return ChainId.MAINNET;
    case Network.arbitrum:
      return ChainId.ARBITRUM_ONE;
    case Network.polygon:
      return ChainId.POLYGON;
    case Network.bsc:
      return ChainId.BSC;
    case Network.celo:
      return ChainId.CELO;
    case Network.optimism:
      return ChainId.OPTIMISM;
    case Network.avalanche:
      return ChainId.AVALANCHE;
    case Network.mantap:
      return ChainId.MANTA_PACIFIC;
    case Network.metis:
      return ChainId.METIS;
    case Network.base:
      return ChainId.BASE;
    case Network.mantle:
      return ChainId.MANTLE;
    case Network.linea:
      return ChainId.LINEA;
    case Network.blast:
      return ChainId.BLAST;
    case Network.zksync:
      return ChainId.ZKSYNC;
  }
  throw new Error(`getChainIdFromNetwork unsupported network ${network}`);
}

export function getNetworkFromChainId(chainId: ChainId): Network {
  switch (chainId) {
    case ChainId.MAINNET:
      return Network.ethereum;
    case ChainId.ARBITRUM_ONE:
      return Network.arbitrum;
    case ChainId.POLYGON:
      return Network.polygon;
    case ChainId.BSC:
      return Network.bsc;
    case ChainId.CELO:
      return Network.celo;
    case ChainId.OPTIMISM:
      return Network.optimism;
    case ChainId.AVALANCHE:
      return Network.avalanche;
    case ChainId.MANTA_PACIFIC:
      return Network.mantap;
    case ChainId.METIS:
      return Network.metis;
    case ChainId.BASE:
      return Network.base;
    case ChainId.MANTLE:
      return Network.mantle;
    case ChainId.LINEA:
      return Network.linea;
    case ChainId.ZKSYNC:
      return Network.zksync;
    case ChainId.BLAST:
      return Network.blast;
  }
  throw new Error(`unsupported chainId ${chainId}`);
}
