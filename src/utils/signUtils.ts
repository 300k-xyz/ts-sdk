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
  apiSecret,
  postData,
}: {
  method: Method;
  path: string;
  apiKey: string;
  apiSecret: string;
  postData?: any;
}) {
  const ts = Date.now();
  return {
    'X-APIKEY': '63fba8b596acd8e3f1d99f84a873fd20e5',
    'X-TS': ts,
    'X-SIGNATURE': create300kSignature({ ts, method, path, apiSecret, postData }),
  };
}
