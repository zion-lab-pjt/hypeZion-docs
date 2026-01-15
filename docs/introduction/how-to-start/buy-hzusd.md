---
sidebar_position: 2
title: Buy hzUSD
---

# Buy hzUSD

hzUSD is a no-liquidation stablecoin issued by Hypezion Finance.

Designed to maintain a price around 1.00 through minting/redemption against collateral assets (e.g., kHYPE) and secondary market trading, the peg is maintained through arbitrage and dynamic fees.

This page explains two methods to acquire hzUSD: Mint and DEX purchase.

For detailed information on fees, limits, and related parameters, refer to "Protocol → Mint & Redeem → Fees & Limits."

---

### 0. Prerequisites

* **Wallet:** Rabby or other EVM-compatible crypto wallets.
* **Network:** HyperEVM added and selected
* **Gas:** Small amount of HYPE tokens for transaction fees
* **Collateral (for Minting):** kHYPE

> Note: Rates and fees in this documentation are illustrative examples.

---

### 1. Choosing an Acquisition Method

* **Mint (Issue from Collateral):** Subject to mint fees.
* **Buy on DEX (Secondary Market Purchase):** Subject to market price, liquidity, slippage, and price impact.

---

### 2. Mint from Collateral

#### 2.1 Process

1. Open **Stablecoin** in the app
2. Select **HYPE** in the Select Input Token field and enter the amount to deposit as collateral
3. Review the quote in the Quote panel
4. **Approve** → **Confirm**
5. Sign in wallet → Wait for confirmation (several seconds to tens of seconds)
6. After transaction completion, hzUSD balance is reflected in your wallet

> The amount displayed in "You receive" may vary from the quote due to network congestion or internal price updates.

#### 2.2 Common Errors and Issues

* **Insufficient Gas:** Insufficient HYPE balance. Add a small amount.
* **Allowance/Approval:** First-time users must approve the kHYPE contract.
* **Queue Active:** Minting requests have reached the limit, causing a temporary queue. Wait or adjust the amount.
* **Slippage Too Low:** Slippage tolerance is too strict for execution. Increase tolerance or split the order.

#### 2.3 Reference: When Minting Tends to Be Advantageous

* When hzUSD price on DEX exceeds 1.00
* When DEX liquidity is thin and price impact is significant for the order size
* When protocol mint fees are reduced
* When the queue is inactive and immediate minting is available

---

### 3. Frequently Asked Questions (FAQ)

**Q1. How does hzUSD converge to 1.00?**

A. Mint/Redeem mechanisms and secondary market arbitrage drive convergence. When price exceeds 1.00, existing hzUSD holders selling or new minting followed by selling increases supply, creating downward pressure. When price falls below 1.00, market buying followed by redemption (or holding/yield farming) increases demand, creating upward pressure. Additionally, fees are dynamic and suppress excessive unidirectional flows.

**Q2. Does no-liquidation truly mean there are no liquidations?**

A. It refers to a design where forced liquidations of individual user positions do not occur. However, during extreme market volatility, conservative behaviors such as queues, limits, and elevated fees may occur. In such cases, the possibility of depegging exists, similar to many stablecoins. As with all DeFi projects, smart contract and market risks remain.

**Q3. Which is safer, Mint or DEX?**

A. Both are executed entirely on-chain. Mint follows protocol pricing and fees, while DEX follows market liquidity and price discovery.

* Cost minimization: Compare quotes and DEX prices.
* Execution certainty: Check queue status/limits on the Mint side and liquidity/slippage on the DEX side.

**Q4. I don't have kHYPE. What should I do?**

A. On the Hypezion Finance frontend, a swap router utilizing an external DEX aggregator with extensive operational history is integrated, enabling deposits with many assets available on HyperEVM without issue.

---

### 4. Risks and Considerations

* **Dynamic Fees:** Fees fluctuate based on market conditions. Refer to the fee displayed in the app quote for the latest rates.
* **Queue / Limits:** Temporary minting/redemption restrictions may be activated during periods of concentrated demand.
* **Price Deviation:** Market price may deviate from 1.00. In such cases, convergence is expected through arbitrage and time passage. Staged stability mechanisms are also embedded to mitigate price deviation.
* **Smart Contract Risk:** Even audited contracts carry non-zero risk. Key management and phishing protection are essential.
* **Regulatory/Tax:** Verify laws and tax regulations in your jurisdiction.

---

### 5. Summary

* hzUSD can be acquired via mint or swap on a DEX.
* Compare DEX price, mint fee, and queue status at the time to choose based on cost, certainty, and speed
* After acquisition, hzUSD can be deposited into the Stability Pool to earn yield with shzUSD
