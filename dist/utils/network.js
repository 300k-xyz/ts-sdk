"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkFromChainId = exports.getChainIdFromNetwork = exports.networkToChainIdMap = exports.Network = void 0;
var Network;
(function (Network) {
    Network["ethereum"] = "ethereum";
    Network["arbitrum"] = "arbitrum";
    Network["polygon"] = "polygon";
    Network["bsc"] = "bsc";
    Network["celo"] = "celo";
    Network["optimism"] = "optimism";
    Network["avalanche"] = "avalanche";
    Network["mantap"] = "mantap";
    Network["metis"] = "metis";
    Network["base"] = "base";
    Network["mantle"] = "mantle";
    Network["linea"] = "linea";
    Network["zksync"] = "zksync";
    Network["blast"] = "blast";
})(Network = exports.Network || (exports.Network = {}));
exports.networkToChainIdMap = {
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
function getChainIdFromNetwork(network) {
    return exports.networkToChainIdMap[network];
}
exports.getChainIdFromNetwork = getChainIdFromNetwork;
const chainIdToNetworkMap = {};
for (let key in exports.networkToChainIdMap) {
    chainIdToNetworkMap[exports.networkToChainIdMap[key]] = key;
}
function getNetworkFromChainId(chainId) {
    const chaindId = chainIdToNetworkMap[chainId];
    if (!chaindId)
        throw new Error(`getNetworkFromChainId invalid chaindId=${chaindId}`);
    return chaindId;
}
exports.getNetworkFromChainId = getNetworkFromChainId;
