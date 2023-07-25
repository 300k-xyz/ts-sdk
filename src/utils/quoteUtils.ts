import { Network } from './network';
import { BASE_URL_300K_API } from './config';
import { create300kSignature } from './signUtils';
import axios from 'axios';

// [r.price, r.amountAsset, r.hash, r.path, r.gasUSD];
export type QuoteArr = [number, number, string, string, number];

export interface OrderbookResponse {
  symbol: string;
  amountUSD: number;
  lastUpdateTs: number;
  // [price, amountAsset, hash, path, gasUSD]
  asks?: QuoteArr[];
  bids?: QuoteArr[];
}

export async function getOrderBook({
  network,
  query,
  apiKey,
  apiSecret,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  query: {
    symbol: string;
    side: 'bid' | 'ask';
    // if LINK/USDC, can use amountUSD to specify how much USD trade to quote
    amountUSD?: number;
    // if LINK/WETH, can use amountQuote to specify how much WETH worth of trade to quote
    amountQuote?: number;
  };
}): Promise<OrderbookResponse> {
  const ts = Date.now();
  const path = `/api/${network}/v1/rfq/orderbook `;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'GET', path, apiSecret, postData: {} }),
  };
  const { amountUSD, amountQuote } = query;
  if (!amountUSD && !amountQuote) {
    throw new Error(`either amountQuote or amountUSD is required`);
  }
  const res = await axios.get<OrderbookResponse>(url, { params: query, headers });
  return res.data;
}
