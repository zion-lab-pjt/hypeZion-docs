---
sidebar_position: 1
title: How to Start
---

# How to Start

## The Three Core Tokens of Hypezion Finance

Hypezion Finance operates with three core tokens designed to circularly complement stability, yield, and growth.

| Token    | Overview                                                                          | Primary Use Case                                        |
| -------- | --------------------------------------------------------------------------------- | ------------------------------------------------------- |
| hzUSD    | No-liquidation stablecoin                                                         | Stable operations, yield generation, transactions       |
| shzUSD   | Yield-bearing share token representing deposited hzUSD in the Stability Pool      | Yield accrual and participation in redistribution       |
| bullHYPE | Derivative token providing structural leverage to HYPE / Leveraged HYPE token     | Leveraged investment and price exposure                 |

---

## Prerequisites

### 1. Wallet

* Recommended: Rabby or other EVM-compatible crypto wallets.
* Available as browser extensions. Mobile apps are also supported.

### 2. Network Configuration

* Hypezion Finance is built on HyperEVM.
* Manually add the following to Rabby:

```
Network Name: HyperEVM
RPC URL: https://rpc.hyperliquid.xyz/evm
Chain ID: 999
Currency Symbol: HYPE
```

* Confirmation: If "HyperEVM" appears in the top right of your wallet, the setup is complete.
* You can also add the chain at: [https://chainlist.org/?search=hyperevm](https://chainlist.org/?search=hyperevm)

### 3. Gas Fees

* Transactions on HyperEVM require a small amount of HYPE tokens.
  * Example: Approximately 0.001–0.005 HYPE per swap or mint.
  * Small amounts are sufficient. Acquiring some HYPE on Hyperliquid or HyperEVM DEXs is recommended.

### 4. Collateral Asset

* Hypezion Finance uses kHYPE, a liquid staking token of HYPE, for minting.
* kHYPE is an LST-type collateral asset with liquidity and serves as the backbone of system stability.
* However, Hypezion Finance integrates a DEX router on the app, enabling deposits with many assets available on HyperEVM.
