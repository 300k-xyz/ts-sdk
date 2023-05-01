import { Network } from './network';
import { create300kSignature } from './signUtils';
import axios from 'axios';
import { BASE_URL_300K_API } from './config';

async function getOrderHistory({
  apiKey,
  apiSecret,
  network,
  query,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  query: {
    walletAddress: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
    tokenInSymbol?: string;
    tokenOutSymbol?: string;
  };
}) {
  const ts = Date.now();
  const path = `/api/${network}/v1/history-orders`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers: any = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'GET', path, apiSecret, postData: query }),
  };
  const res = await axios.get(url, {
    params: query,
    headers,
  });
  return res.data;
}
