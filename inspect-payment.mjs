// Read-only x402 requirements inspector. Node.js 22+.
const input = process.argv[2];
if (!input) { console.error('Usage: node inspect-payment.mjs https://public-api.example/resource'); process.exit(1); }
const url = new URL(input);
if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Use a public HTTPS URL without credentials.');
try {
  const response = await fetch(url, {redirect: 'error', signal: AbortSignal.timeout(15000), headers: {Accept: 'application/json'}});
  console.log('HTTP', response.status);
  const required = response.headers.get('payment-required');
  if (required) {
    if (required.length > 65536) throw new Error('Requirements header too large.');
    console.log(JSON.stringify(JSON.parse(Buffer.from(required, 'base64').toString('utf8')), null, 2));
  } else {
    console.log('No PAYMENT-REQUIRED header. A v1 endpoint may describe requirements in its JSON body.');
  }
  console.log('No payment was signed or submitted.');
  await response.body?.cancel();
} catch (error) { console.error(error.message); process.exitCode = 1; }
