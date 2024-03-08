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

export const networkToChainIdMap: Record<Network, number> = {
  ethereum: 1,
  arbitrum: 42161,
  polygon: 137,
  bsc: 56,
  celo: 42220,
  optimism: 10,
  avalanche: 43114,
  mantap: 169,
  metis: 1088,
  base: 8453,
  mantle: 5000,
  linea: 59144,
  zksync: 324,
  blast: 81457,
};
//
// export enum ChainId {
//   MAINNET = 1,
//   ROPSTEN = 3,
//   RINKEBY = 4,
//   GÖRLI = 5,
//   KOVAN = 42,
//   OPTIMISM = 10,
//   OPTIMISTIC_KOVAN = 69,
//   BSC = 56,
//   ARBITRUM_ONE = 42161,
//   ARBITRUM_RINKEBY = 421611,
//   POLYGON = 137,
//   POLYGON_MUMBAI = 80001,
//   CELO = 42220,
//   CELO_ALFAJORES = 44787,
//   GNOSIS = 100,
//   MOONBEAM = 1284,
//   AVALANCHE = 43114,
//   MANTA_PACIFIC = 169,
//   METIS = 1088,
//   BASE = 8453,
//   MANTLE = 5000,
//   LINEA = 59144,
//   ZKSYNC = 324,
//   BLAST = 81457,
// }

export function getChainIdFromNetwork(network: Network) {
  return networkToChainIdMap[network];
}

const chainIdToNetworkMap: Record<string, string> = {};
for (let key in networkToChainIdMap) {
  chainIdToNetworkMap[networkToChainIdMap[key as Network]] = key;
}

export function getNetworkFromChainId(chainId: number): Network {
  const chaindId = chainIdToNetworkMap[chainId];
  if (!chaindId) throw new Error(`getNetworkFromChainId invalid chaindId=${chaindId}`);
  return chaindId as Network;
}
