import { Network } from './network';
import { create300kSignature } from './signUtils';
import axios from 'axios';
import { BASE_URL_300K_API } from './config';

export interface CreateOrderParams {
  routeHashes: string[];
  expireTimestamp?: number;
  gasPrice?: string;
  maxPriorityFeePerGas?: string;
  walletAddress: string;
  amountIn: number;
  amountInRaw?: string;
  amountOutMin: number;
  nonce?: number;
  strategyId?: number;
  strategyType?: number;
  traderAddress: string;
  newClientOrderId?: string;
  dynamicGasPrice?: boolean;
  estimateGasOnly?: boolean;
}

export async function createOrder({
  network,
  postBody,
  apiKey,
  apiSecret,
  timeout = 120 * 1000,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  postBody: CreateOrderParams;
  timeout?: number;
}) {
  const ts = Date.now();
  const path = `/api/${network}/v1/order`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'POST', path, apiSecret, postData: postBody }),
  };
  const res = await axios.post(url, postBody, {
    timeout,
    headers,
  });
  return res.data;
}