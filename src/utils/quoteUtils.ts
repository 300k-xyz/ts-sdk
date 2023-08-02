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
export interface QuoteResponse {
  blockNumber: string;
  amount: string;
  amountDecimals: string;
  quote: string;
  quoteDecimals: string;
  quoteGasAdjusted: string;
  quoteGasAdjustedDecimals: string;
  gasUseEstimateQuote: string;
  gasUseEstimateQuoteDecimals: string;
  gasUseEstimate: string;
  gasUseEstimateUSD: string;
  simulationStatus: string;
  simulationError: boolean;
  gasPriceWei: string;
  route: Route[][];
  // [0.000541395,0.001,"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48-0x2b591e99afe9f32eaa6214f7b7629768c40eeb39-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2|0xf6dcdce0ac3001b2f67f750bc64ea5beb37b5824-0x9e0905249ceefffb9605e034b534544684a58be6|9970-3000","USDC-x30-HEX-30-WETH",22.319
  // [price, amountAsset, route hash, route path, gas usd]
  allRoutes: [number, number, string, string, number][];
  routeString: string;
  quoteId: string;
  rawTxPartial: RawTxPartial;
}

export interface Route {
  type: string;
  address: string;
  tokenIn: TokenInfo;
  tokenOut: TokenInfo;
  reserve0?: ReserveInfo;
  reserve1?: ReserveInfo;
  amountIn: string;
  amountOut: string;
  tickCurrent?: string;
  liquidity?: string;
  sqrtRatioX96?: string;
  fee?: string;
}

export interface TokenInfo {
  chainId: number;
  decimals: string;
  address: string;
  symbol: string;
}

export interface ReserveInfo {
  token: TokenInfo;
  quotient: string;
}

export interface RawTxPartial {
  to: string;
  data: string;
}

export async function getQuote({
  network,
  query,
  apiKey,
  apiSecret,
  timeout = 120000,
}: {
  apiKey: string;
  apiSecret: string;
  network: Network;
  query: {
    tokenInAddress: string;
    tokenOutAddress: string;
    amount: string;
    maxAllowedSlippage?: string;
  };
  timeout?: number;
}): Promise<QuoteResponse> {
  const ts = Date.now();
  const path = `/api/${network}/v1/rfq/quote `;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method: 'GET', path, apiSecret, postData: {} }),
  };
  const res = await axios.get<QuoteResponse>(url, { params: query, headers, timeout });
  return res.data;
}
