"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const positionUtils = __importStar(require("../utils/positionUtils"));
const ava_1 = __importDefault(require("ava"));
(0, ava_1.default)('positionUtils getPositionIdFromEvents works', (t) => {
    const events = {
        "0": {
            "address": "0x471EcE3750Da237f93B8E339c536989b8978a438",
            "blockNumber": 20543172,
            "transactionHash": "0x493544a0ee23888131bc569ce396d7a2d9e7e6ecca104ff0e117a36b757541f6",
            "transactionIndex": 19,
            "blockHash": "0x5521284cdf092b0698df5c16dfc5ccc3a038cb0ef3a99184377b71091afcee94",
            "logIndex": 32,
            "removed": false,
            "id": "log_5d05b90e",
            "returnValues": {},
            "signature": null,
            "raw": {
                "data": "0x00000000000000000000000000000000000000000000000000038d7ea4c68000",
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x000000000000000000000000ffeb4b6664b83643cdcacfcf863a45a17d58f850",
                    "0x000000000000000000000000079e7a44f42e9cd2442c3b9536244be634e8f888"
                ]
            }
        },
        "1": {
            "address": "0x079e7A44F42E9cd2442C3B9536244be634e8f888",
            "blockNumber": 20543172,
            "transactionHash": "0x493544a0ee23888131bc569ce396d7a2d9e7e6ecca104ff0e117a36b757541f6",
            "transactionIndex": 19,
            "blockHash": "0x5521284cdf092b0698df5c16dfc5ccc3a038cb0ef3a99184377b71091afcee94",
            "logIndex": 33,
            "removed": false,
            "id": "log_fa494c51",
            "returnValues": {},
            "signature": null,
            "raw": {
                "data": "0x0000000000000000000000003d79edaabc0eab6f08ed885c05fc0b014290d95a0000000000000000000000000000000000000000000000000015d6bd31862aa900000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000000000000000000000",
                "topics": [
                    "0x7a53080ba414158be7ec69b987b5fb7d07dee101fe85488f0853ae16239d0bde",
                    "0x0000000000000000000000003d79edaabc0eab6f08ed885c05fc0b014290d95a",
                    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff268",
                    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffde4"
                ]
            }
        },
        "2": {
            "address": "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
            "blockNumber": 20543172,
            "transactionHash": "0x493544a0ee23888131bc569ce396d7a2d9e7e6ecca104ff0e117a36b757541f6",
            "transactionIndex": 19,
            "blockHash": "0x5521284cdf092b0698df5c16dfc5ccc3a038cb0ef3a99184377b71091afcee94",
            "logIndex": 34,
            "removed": false,
            "id": "log_4e35ff5a",
            "returnValues": {},
            "signature": null,
            "raw": {
                "data": "0x",
                "topics": [
                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                    "0x000000000000000000000000ffeb4b6664b83643cdcacfcf863a45a17d58f850",
                    "0x0000000000000000000000000000000000000000000000000000000000000eae"
                ]
            }
        },
        "3": {
            "address": "0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A",
            "blockNumber": 20543172,
            "transactionHash": "0x493544a0ee23888131bc569ce396d7a2d9e7e6ecca104ff0e117a36b757541f6",
            "transactionIndex": 19,
            "blockHash": "0x5521284cdf092b0698df5c16dfc5ccc3a038cb0ef3a99184377b71091afcee94",
            "logIndex": 35,
            "removed": false,
            "id": "log_0d453c78",
            "returnValues": {},
            "signature": null,
            "raw": {
                "data": "0x0000000000000000000000000000000000000000000000000015d6bd31862aa900000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000000000000000000000",
                "topics": [
                    "0x3067048beee31b25b2f1681f88dac838c8bba36af25bfb2b7cf7473a5847e35f",
                    "0x0000000000000000000000000000000000000000000000000000000000000eae"
                ]
            }
        }
    };
    const positionId = positionUtils.getPositionIdFromEvents(events);
    t.deepEqual(positionId, 3758);
});
