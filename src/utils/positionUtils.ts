import { Network } from './network';
import { create300kSignature } from './signUtils';
import axios from 'axios';
import { BASE_URL_300K_API } from './config';

export async function createPosition({
  network,
  postBody,
  apiKey,
  apiSecret,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  postBody: {
    traderAddress: string;
    walletAddress: string;
    token0: string;
    token1: string;
    amount0Desired: number;
    amount1Desired: number;
    priceLower: string;
    priceUpper: string;
    fee: number;
    burnPositionId?: number;
    newClientOrderId?: string;
    gasPrice?: string;
    maxPriorityFeePerGas?: string;
    estimateGasOnly?: boolean;
    strategyId?: number;
    strategyType?: number;
  };
}) {
  const ts = Date.now();
  const path = `/api/${network}/v1/v3-position`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'POST', path, apiSecret, postData: postBody }),
  };
  const res = await axios.post(url, postBody, {
    timeout: 120 * 1000,
    headers,
  });
  return res;
}

export async function getPositionDetails({
  network,
  walletAddress,
  apiKey,
  apiSecret,
}: {
  network: string;
  walletAddress: string;
  apiKey: string;
  apiSecret: string;
}) {
  const ts = Date.now();
  const path = `/api/${network}/v1/v3-position`;
  const url = `${BASE_URL_300K_API}${path}?walletAddress=${walletAddress}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'POST', path, apiSecret, postData: {} }),
  };
  const res = await axios.get(url, {
    timeout: 120 * 1000,
    headers,
  });
  return res;
}

export async function removeLiquidityAndBurn({
  network,
  postBody,
  apiKey,
  apiSecret,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  postBody: {
    positionId: number;
    walletAddress: string;
    traderAddress: string;
    newClientOrderId?: string;
    nonce?: number;
    gasPrice?: string;
    maxPriorityFeePerGas?: string;
    estimateGasOnly?: boolean;
    strategyId?: number;
    strategyType?: number;
  };
}) {
  const ts = Date.now();
  const path = `/api/${network}/v1/remove-v3-position`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'POST', path, apiSecret, postData: postBody }),
  };
  const res = await axios.post(url, postBody, {
    timeout: 120 * 1000,
    headers,
  });
  return res;
}
