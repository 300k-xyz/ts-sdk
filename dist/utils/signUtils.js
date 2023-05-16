"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create300kApiHeader = exports.create300kSignature = void 0;
const crypto_1 = __importDefault(require("crypto"));
function create300kSignature({ ts, method, path, apiSecret, postData, }) {
    const encodeBody = method !== 'GET' && postData && Object.keys(postData).length > 0 ? JSON.stringify(postData) : '';
    const signature = crypto_1.default
        .createHmac('sha256', apiSecret)
        .update(`${ts}${method.toUpperCase()}${path}${encodeBody}`)
        .digest('hex');
    return signature;
}
exports.create300kSignature = create300kSignature;
function create300kApiHeader({ method, path, apiSecret, postData, ts: tsOverride, }) {
    const ts = tsOverride || Date.now();
    return {
        'X-APIKEY': '63fba8b596acd8e3f1d99f84a873fd20e5',
        'X-TS': ts,
        'X-SIGNATURE': create300kSignature({ ts, method, path, apiSecret, postData }),
    };
}
exports.create300kApiHeader = create300kApiHeader;
