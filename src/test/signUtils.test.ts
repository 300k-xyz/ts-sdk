import * as signUtils from '../utils/signUtils';
import test from 'ava';

const apiKey = 'test-key';
const apiSecret = '9128jahjcxmi9823rXjs74S2133';

test('signUtils header with no post body', (t) => {
  const header: any = signUtils.create300kApiHeader({
    method: 'GET',
    path: '/api/v1/smoke',
    ts: 1684209109427,
    apiKey,
    apiSecret,
    postData: {},
  });

  t.deepEqual(header, {
    'X-APIKEY': '63fba8b596acd8e3f1d99f84a873fd20e5',
    'X-TS': 1684209109427,
    'X-SIGNATURE': 'db35e14f46f005bb15d09ce4fec9f7fd6dbb562278f708f374268dd6a01a94bf',
  });
});

test('signUtils header with post body', (t) => {
  const header: any = signUtils.create300kApiHeader({
    method: 'POST',
    path: '/api/v1/smoke',
    ts: 1684209109427,
    apiKey,
    apiSecret,
    postData: {
      foo: 'bar',
    },
  });

  t.deepEqual(header, {
    'X-APIKEY': '63fba8b596acd8e3f1d99f84a873fd20e5',
    'X-TS': 1684209109427,
    'X-SIGNATURE': 'ce0f653adba9df22c4b2ea0bc409250bb4d1465ba9c124a2549b0bae38cb5428',
  });
});
