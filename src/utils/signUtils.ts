import crypto from 'crypto';
type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';
export function create300kSignature({
  ts,
  method,
  path,
  apiSecret,
  postData,
}: {
  ts: number;
  method: Method;
  path: string;
  apiSecret: string;
  postData?: any;
}) {
  const encodeBody = method !== 'GET' && postData && Object.keys(postData).length > 0 ? JSON.stringify(postData) : '';
  const signature = crypto
    .createHmac('sha256', apiSecret)
    .update(`${ts}${method.toUpperCase()}${path}${encodeBody}`)
    .digest('hex');
  return signature;
}

export function create300kApiHeader({
  method,
  path,
  apiKey,
  apiSecret,
  postData,
  ts: tsOverride,
}: {
  method: Method;
  path: string;
  apiKey: string;
  apiSecret: string;
  postData?: any;
  ts?: number;
}) {
  const ts = tsOverride || Date.now();
  return {
    'X-APIKEY': apiKey,
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method, path, apiSecret, postData }),
  };
}
