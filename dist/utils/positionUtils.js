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
exports.removeLiquidityAndBurn = exports.getPositionDetails = exports.getPositionDetail = exports.createPosition = void 0;
const signUtils_1 = require("./signUtils");
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
function createPosition({ network, postBody, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/v3-position`;
        const url = `${config_1.BASE_URL_300K_API}${path}`;
        const headers = (0, signUtils_1.create300kApiHeader)({ ts, method: 'POST', path, apiKey, apiSecret, postData: postBody });
        const res = yield axios_1.default.post(url, postBody, {
            timeout: 120 * 1000,
            headers,
        });
        return res.data;
    });
}
exports.createPosition = createPosition;
function getPositionDetail({ network, tokenId, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/v3-position-detail`;
        const url = `${config_1.BASE_URL_300K_API}${path}?tokenId=${tokenId}`;
        const headers = (0, signUtils_1.create300kApiHeader)({ ts, method: 'GET', path, apiKey, apiSecret, postData: {} });
        const res = yield axios_1.default.get(url, {
            headers,
        });
        return res.data;
    });
}
exports.getPositionDetail = getPositionDetail;
function getPositionDetails({ network, walletAddress, apiKey, apiSecret, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const ts = Date.now();
        const path = `/api/${network}/v1/v3-positions`;
        const url = `${config_1.BASE_URL_300K_API}${path}?walletAddress=${walletAddress}`;
        const headers = (0, signUtils_1.create300kApiHeader)({ ts, method: 'GET', path, apiKey, apiSecret, postData: {} });
        const res = yield axios_1.default.get(url, {
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
        const headers = (0, signUtils_1.create300kApiHeader)({ ts, method: 'POST', path, apiKey, apiSecret, postData: postBody });
        const res = yield axios_1.default.post(url, postBody, {
            timeout: 120 * 1000,
            headers,
        });
        return res.data;
    });
}
exports.removeLiquidityAndBurn = removeLiquidityAndBurn;
