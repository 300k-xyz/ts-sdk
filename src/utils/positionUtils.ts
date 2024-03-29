import { Network } from './network';
import { create300kApiHeader, create300kSignature } from './signUtils';
import axios from 'axios';
import { BASE_URL_300K_API } from './config';

export interface V3Position {
  tokenId: number;
  nonce: string;
  operator: string;
  token0: string;
  token1: string;
  fee: number;
  tickLower: number;
  tickUpper: number;
  liquidity: string;
  feeGrowthInside0LastX128: string;
  feeGrowthInside1LastX128: string;
  tokensOwed0: string;
  tokensOwed1: string;
  token0Symbol: string;
  token1Symbol: string;
  token0Decimals: number;
  token1Decimals: number;
  priceLower: string;
  priceUpper: string;
  price: string;
  priceLowerInvert: string;
  priceUpperInvert: string;
  priceInvert: string;
  amount0: string;
  amount1: string;
  sqrtPriceX96: string;
  tick: number;
  poolAddress: string;
  unclaimedFee0?: string;
  unclaimedFee1?: string;
  owner?: string;
}

export interface CreatePositionResponse {
  blockHash: string;
  blockNumber: number;
  contractAddress: any;
  cumulativeGasUsed: number;
  effectiveGasPrice: number;
  from: string;
  gasUsed: number;
  logsBloom: string;
  status: boolean;
  to: string;
  transactionHash: string;
  transactionIndex: number;
  type: string;
  events: any;
}
const increaseLiquidityEventHash = '0x3067048beee31b25b2f1681f88dac838c8bba36af25bfb2b7cf7473a5847e35f';

export function parseLog(data: { topics: string[]; address: string; data: string }) {
  if (!data) {
    return null;
  }
  switch (data.topics[0]) {
    case increaseLiquidityEventHash: {
      const positionId = parseInt(data.topics[1].slice(2), 16);
      return {
        name: 'IncreaseLiquidity',
        msg: `IncreaseLiquidity position id ${positionId}`,
        positionId,
      };
    }

    default:
      return null;
  }
}

export function parseEvent(event: any) {
  if (!event) return null;
  const { raw } = event;
  if (!raw || !raw.topics) {
    return null;
  }
  return parseLog({ topics: raw.topics, address: event.address, data: raw.data });
}

export function getPositionIdFromEvents(events: any): number | null {
  for (let key in events) {
    const event = events[key];
    const eventParsed = parseEvent(event);
    if (eventParsed?.name === 'IncreaseLiquidity') return eventParsed.positionId;
  }
  return null;
}

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
}): Promise<CreatePositionResponse> {
  const ts = Date.now();
  const path = `/api/${network}/v1/v3-position`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = create300kApiHeader({ ts, method: 'POST', path, apiKey, apiSecret, postData: postBody });
  const res = await axios.post(url, postBody, {
    timeout: 120 * 1000,
    headers,
  });
  return res.data.result;
}

export async function increaseLiquidity({
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
    tokenId: number;
    amount0Desired: number;
    amount1Desired: number;
    amount0Min: number;
    amount1Min: number;
    newClientOrderId?: string;
    gasPrice?: string;
    maxPriorityFeePerGas?: string;
    estimateGasOnly?: boolean | 'skip';
    strategyId?: number;
    strategyType?: number;
    autoSwap?: boolean; // if enabled, will try to auto swap for enough tokens before adding liquidity
  };
}): Promise<CreatePositionResponse> {
  const ts = Date.now();
  const path = `/api/${network}/v1/adjust-liquidity`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = create300kApiHeader({ ts, method: 'POST', path, apiKey, apiSecret, postData: postBody });
  const res = await axios.post(url, postBody, {
    timeout: 120 * 1000,
    headers,
  });
  return res.data.result;
}

export async function decreaseLiquidity({
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
    tokenId: number;
    liquidity: string;
    amount0Min: number;
    amount1Min: number;
    newClientOrderId?: string;
    gasPrice?: string;
    maxPriorityFeePerGas?: string;
    estimateGasOnly?: boolean | 'skip';
    strategyId?: number;
    strategyType?: number;
    autoSwap?: boolean; // if enabled, will try to auto swap for enough tokens before adding liquidity
  };
}): Promise<CreatePositionResponse> {
  const ts = Date.now();
  const path = `/api/${network}/v1/adjust-liquidity`;
  const url = `${BASE_URL_300K_API}${path}`;
  const headers = create300kApiHeader({ ts, method: 'POST', path, apiKey, apiSecret, postData: postBody });
  const res = await axios.post(url, postBody, {
    timeout: 120 * 1000,
    headers,
  });
  return res.data.result;
}

export async function getPositionDetail({
  network,
  tokenId,
  apiKey,
  apiSecret,
  withUnclaimedFees,
}: {
  network: string;
  tokenId: number;
  withUnclaimedFees?: boolean;
  apiKey: string;
  apiSecret: string;
}): Promise<V3Position> {
  const ts = Date.now();
  const path = `/api/${network}/v1/v3-position-detail`;
  let url = `${BASE_URL_300K_API}${path}?tokenId=${tokenId}`;
  if (withUnclaimedFees) {
    url = `${url}&withUnclaimedFees=true`;
  }
  const headers = create300kApiHeader({ ts, method: 'GET', path, apiKey, apiSecret, postData: {} });
  const res = await axios.get(url, {
    headers,
  });
  return res.data;
}

export async function getPositionDetails({
  network,
  walletAddress,
  withUnclaimedFees,
  apiKey,
  apiSecret,
}: {
  network: string;
  walletAddress: string;
  withUnclaimedFees?: boolean;
  apiKey: string;
  apiSecret: string;
}): Promise<V3Position[]> {
  const ts = Date.now();
  const path = `/api/${network}/v1/v3-positions`;
  let url = `${BASE_URL_300K_API}${path}?walletAddress=${walletAddress}`;
  if (withUnclaimedFees) {
    url = `${url}&withUnclaimedFees=true`;
  }
  const headers = create300kApiHeader({ ts, method: 'GET', path, apiKey, apiSecret, postData: {} });
  const res = await axios.get(url, {
    headers,
  });
  return res.data;
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
  const headers = create300kApiHeader({ ts, method: 'POST', path, apiKey, apiSecret, postData: postBody });
  const res = await axios.post(url, postBody, {
    timeout: 120 * 1000,
    headers,
  });
  return res.data;
}
