"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkFromChainId = exports.getChainIdFromNetwork = exports.ChainId = exports.networkToChainIdMap = exports.Network = void 0;
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
var ChainId;
(function (ChainId) {
    ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
    ChainId[ChainId["ROPSTEN"] = 3] = "ROPSTEN";
    ChainId[ChainId["RINKEBY"] = 4] = "RINKEBY";
    ChainId[ChainId["G\u00D6RLI"] = 5] = "G\u00D6RLI";
    ChainId[ChainId["KOVAN"] = 42] = "KOVAN";
    ChainId[ChainId["OPTIMISM"] = 10] = "OPTIMISM";
    ChainId[ChainId["OPTIMISTIC_KOVAN"] = 69] = "OPTIMISTIC_KOVAN";
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
    ChainId[ChainId["ARBITRUM_RINKEBY"] = 421611] = "ARBITRUM_RINKEBY";
    ChainId[ChainId["POLYGON"] = 137] = "POLYGON";
    ChainId[ChainId["POLYGON_MUMBAI"] = 80001] = "POLYGON_MUMBAI";
    ChainId[ChainId["CELO"] = 42220] = "CELO";
    ChainId[ChainId["CELO_ALFAJORES"] = 44787] = "CELO_ALFAJORES";
    ChainId[ChainId["GNOSIS"] = 100] = "GNOSIS";
    ChainId[ChainId["MOONBEAM"] = 1284] = "MOONBEAM";
    ChainId[ChainId["AVALANCHE"] = 43114] = "AVALANCHE";
    ChainId[ChainId["MANTA_PACIFIC"] = 169] = "MANTA_PACIFIC";
    ChainId[ChainId["METIS"] = 1088] = "METIS";
    ChainId[ChainId["BASE"] = 8453] = "BASE";
    ChainId[ChainId["MANTLE"] = 5000] = "MANTLE";
    ChainId[ChainId["LINEA"] = 59144] = "LINEA";
    ChainId[ChainId["ZKSYNC"] = 324] = "ZKSYNC";
    ChainId[ChainId["BLAST"] = 81457] = "BLAST";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
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
