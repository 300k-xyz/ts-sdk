"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkFromChainId = exports.getChainIdFromNetwork = exports.ChainId = exports.Network = void 0;
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
})(Network = exports.Network || (exports.Network = {}));
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
})(ChainId = exports.ChainId || (exports.ChainId = {}));
function getChainIdFromNetwork(network) {
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
    }
    throw new Error(`getChainIdFromNetwork unsupported network ${network}`);
}
exports.getChainIdFromNetwork = getChainIdFromNetwork;
function getNetworkFromChainId(chainId) {
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
    }
    throw new Error(`unsupported chainId ${chainId}`);
}
exports.getNetworkFromChainId = getNetworkFromChainId;
