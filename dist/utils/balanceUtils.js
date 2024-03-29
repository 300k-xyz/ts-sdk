"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrice = exports.getNonce = exports.getErc20Allowance = exports.getGasBalance = exports.getErc20Balance = void 0;
const config_1 = require("./config");
const signUtils_1 = require("./signUtils");
const axios_1 = __importDefault(require("axios"));
function getErc20Balance({ network, query, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/get-balance`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'GET', path, apiSecret, postData: {} }),
        };
        const res = yield axios_1.default.get(url, { params: query, headers });
        return res.data.result;
    });
}
exports.getErc20Balance = getErc20Balance;
function getGasBalance({ network, query, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/get-gas-balance`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'GET', path, apiSecret, postData: {} }),
        };
        const res = yield axios_1.default.get(url, { params: query, headers });
        return res.data.result;
    });
}
exports.getGasBalance = getGasBalance;
function getErc20Allowance({ network, query, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/get-erc20-allowance`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'GET', path, apiSecret, postData: {} }),
        };
        const res = yield axios_1.default.get(url, { params: query, headers });
        return res.data.result;
    });
}
exports.getErc20Allowance = getErc20Allowance;
function getNonce({ network, query, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/get-nonce/${query.address}`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'GET', path, apiSecret, postData: {} }),
        };
        const res = yield axios_1.default.get(url, { headers });
        return res.data.result;
    });
}
exports.getNonce = getNonce;
function getGasPrice({ network, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/get-gas-price`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'GET', path, apiSecret, postData: {} }),
        };
        const res = yield axios_1.default.get(url, { headers });
        return res.data.gasPrice;
    });
}
exports.getGasPrice = getGasPrice;
