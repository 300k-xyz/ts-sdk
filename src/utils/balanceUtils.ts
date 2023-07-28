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
