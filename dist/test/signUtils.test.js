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
const signUtils = __importStar(require("../utils/signUtils"));
const ava_1 = __importDefault(require("ava"));
const apiKey = 'test-key';
const apiSecret = '9128jahjcxmi9823rXjs74S2133';
(0, ava_1.default)('signUtils header with no post body', (t) => {
    const header = signUtils.create300kApiHeader({
        method: 'GET',
        path: '/api/v1/smoke',
        ts: 1684209109427,
        apiKey,
        apiSecret,
        postData: {},
    });
    t.deepEqual(header, {
        'X-APIKEY': apiKey,
        'X-TS': 1684209109427,
        'X-SIGNATURE': 'db35e14f46f005bb15d09ce4fec9f7fd6dbb562278f708f374268dd6a01a94bf',
    });
});
(0, ava_1.default)('signUtils header with post body', (t) => {
    const header = signUtils.create300kApiHeader({
        method: 'POST',
        path: '/api/v1/smoke',
        ts: 1684209109427,
        apiKey,
        apiSecret,
        postData: {
            foo: 'bar',
        },
    });
    t.deepEqual(header, {
        'X-APIKEY': apiKey,
        'X-TS': 1684209109427,
        'X-SIGNATURE': 'ce0f653adba9df22c4b2ea0bc409250bb4d1465ba9c124a2549b0bae38cb5428',
    });
});
