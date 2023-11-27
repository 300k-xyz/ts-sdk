import { Network } from './network';
import { BASE_URL_300K_API } from './config';
import { create300kSignature } from './signUtils';
import axios from 'axios';

export async function getErc20Balance({
  network,
  query,
  apiKey,
  apiSecret,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  query: {
    walletAddress: string;
    erc20TokenAddress: string;
  };
}): Promise<string> {
  const ts = Date.now();
  const path = `/api/${network}/v1/get-balance`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'GET', path, apiSecret, postData: {} }),
  };
  const res = await axios.get(url, { params: query, headers });
  return res.data.result;
}

export async function getGasBalance({
  network,
  query,
  apiKey,
  apiSecret,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  query: {
    traderAddress: string;
  };
}): Promise<string> {
  const ts = Date.now();
  const path = `/api/${network}/v1/get-gas-balance`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'GET', path, apiSecret, postData: {} }),
  };
  const res = await axios.get(url, { params: query, headers });
  return res.data.result;
}

export async function getErc20Allowance({
  network,
  query,
  apiKey,
  apiSecret,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  query: {
    walletAddress: string;
    contractAddress: string;
    erc20TokenAddress: string;
  };
}): Promise<string> {
  const ts = Date.now();
  const path = `/api/${network}/v1/get-erc20-allowance`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'GET', path, apiSecret, postData: {} }),
  };
  const res = await axios.get(url, { params: query, headers });
  return res.data.result;
}

export async function getNonce({
  network,
  query,
  apiKey,
  apiSecret,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  query: {
    address: string;
  };
}): Promise<number> {
  const ts = Date.now();
  const path = `/api/${network}/v1/get-nonce`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'GET', path, apiSecret, postData: {} }),
  };
  const res = await axios.get(url, { params: query, headers });
  return res.data.result;
}

export async function getGasPrice({
  network,
  apiKey,
  apiSecret,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
}): Promise<string> {
  const ts = Date.now();
  const path = `/api/${network}/v1/get-gas-price`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'GET', path, apiSecret, postData: {} }),
  };
  const res = await axios.get(url, { headers });
  return res.data.gasPrice;
}
