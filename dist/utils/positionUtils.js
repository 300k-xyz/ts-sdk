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
exports.removeLiquidityAndBurn = exports.getPositionDetails = exports.createPosition = void 0;
const signUtils_1 = require("./signUtils");
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
function createPosition({ network, postBody, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/v3-position`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'POST', path, apiSecret, postData: postBody }),
        };
        const res = yield axios_1.default.post(url, postBody, {
            timeout: 120 * 1000,
            headers,
        });
        return res.data;
    });
}
exports.createPosition = createPosition;
function getPositionDetails({ network, walletAddress, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/v3-position`;
        const url = `${config_1.BASE_URL_300K_API}${path}?walletAddress=${walletAddress}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'POST', path, apiSecret, postData: {} }),
        };
        const res = yield axios_1.default.get(url, {
            timeout: 120 * 1000,
            headers,
        });
        return res.data;
    });
}
exports.getPositionDetails = getPositionDetails;
function removeLiquidityAndBurn({ network, postBody, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/remove-v3-position`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = {
            'X-APIKEY': apiKey,
            'X-TS': ts,
            'X-SIGNATURE': (0, signUtils_1.create300kSignature)({ ts, method: 'POST', path, apiSecret, postData: postBody }),
        };
        const res = yield axios_1.default.post(url, postBody, {
            timeout: 120 * 1000,
            headers,
        });
        return res.data;
    });
}
exports.removeLiquidityAndBurn = removeLiquidityAndBurn;
