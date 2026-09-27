<p align="center"><img src="https://raw.githubusercontent.com/X402blockchains/x402blockchain/main/branding/github-header.svg" alt="X402blockchains" width="100%"></p>

# x402 Examples

Small developer utilities from [X402blockchains](https://x402blockchains.com).

## Inspect payment requirements

`inspect-payment.mjs` makes one unauthenticated GET request to a public HTTPS endpoint and prints its status and x402 payment-requirement metadata. It does not sign authorizations, attach credentials or submit payments.

Requires Node.js 22 or newer:

```sh
node inspect-payment.mjs https://your-public-api.example/resource
```

Use an endpoint you are allowed to query. Some endpoints need query parameters or a different method; this example intentionally supports GET only. A 402 response describes requirements; it is not evidence that settlement happened.

## Build a paid integration

Use the maintained [upstream SDKs and examples](https://github.com/x402-foundation/x402) for payment signing and settlement. Match the advertised protocol version, scheme, network, token and amount; do not assume every EVM deployment supports the same tokens or authorization methods.

## Explorer integration checklist

- Publish documentation, a project logo and resource URLs.
- Keep seller recipients separate from facilitator signers.
- Include successful transaction hashes for each claimed network.
- Compare analytics using identical UTC periods and definitions.
- Submit a [registry proposal](https://github.com/X402blockchains/x402-registry).

These are starter examples, not an SDK, wallet or production facilitator.
