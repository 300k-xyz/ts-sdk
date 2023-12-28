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
exports.getQuote = exports.getOrderBook = void 0;
const config_1 = require("./config");
const signUtils_1 = require("./signUtils");
const axios_1 = __importDefault(require("axios"));
function getOrderBook({ network, query, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/rfq/orderbook`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'GET', path, apiSecret, postData: {} }),
        };
        const { amountUSD, amountQuote } = query;
        if (!amountUSD && !amountQuote) {
            throw new Error(`either amountQuote or amountUSD is required`);
        }
        const res = yield axios_1.default.get(url, { params: query, headers });
        return res.data;
    });
}
exports.getOrderBook = getOrderBook;
function getQuote({ network, query, apiKey, apiSecret, timeout = 120000, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/rfq/quote`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'GET', path, apiSecret, postData: {} }),
        };
        const res = yield axios_1.default.get(url, { params: query, headers, timeout });
        return res.data;
    });
}
exports.getQuote = getQuote;
