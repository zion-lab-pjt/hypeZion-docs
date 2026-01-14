---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/cvdQOULzcasMgbUwaABJ/introduction/how-to-start/redeem-to-collateral-hzusd-hype
---

# Redeem to Collateral（hzUSD → HYPE）

Redeem in Hypezion Finance refers to the operation of converting hzUSD back into collateral assets (HYPE). This is a critical process that supports Hypezion Finance's price stability mechanism.

Users can return hzUSD to the protocol at any time and receive the corresponding collateral asset HYPE. Redeem is the "inverse operation of Mint."

However, internally, factors such as price deviation, pool conditions, and fee adjustments work dynamically, making it different from a simple 1:1 exchange.

***

### 1. Overview

| Item                 | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| Target Asset         | hzUSD (Stablecoin)                                                       |
| Received Asset       | HYPE                                                                     |
| Purpose              | Correction of peg deviation and collateral liquidation                   |
| Fees                 | Dynamic (varies based on market conditions and liquidity)                |
| Restrictions (Queue) | Automatically activated during congestion. May not complete immediately. |

Through Redeem, the protocol performs "recovery of excessively issued hzUSD" and returns the peg back toward 1.00. Simultaneously, collateral (HYPE) is returned to circulation, maintaining market equilibrium.

***

### 2. Prerequisites

* Wallet connected to HyperEVM
* hzUSD balance available
* Small amount of HYPE held for gas fees
* Queue status (Active / Inactive) confirmed in the app

> Redeem is a protocol function. Unlike DEX trading, it is processed according to internal rates and fee settings.

***

### 3. How to Redeem

1. Select the **Stablecoin** tab from the app menu and choose **Redeem** within Trade.
2. In "Select Token to Redeem," enter the amount of hzUSD to return and press "Redeem hzUSD to HYPE."
3. **Approve:** Grant permission to use hzUSD
4. Click **Confirm** and sign in wallet
5. After completion, HYPE will be reflected in your wallet.

***

### 4. Mechanism

Redeem serves as a "supply adjustment" function in Hypezion Finance's peg maintenance algorithm.

| Situation          | Protocol Response                             | User Action                         |
| ------------------ | --------------------------------------------- | ----------------------------------- |
| hzUSD price > 1.00 | Mint is advantageous (issue from collateral)  | Mint and sell to market             |
| hzUSD price < 1.00 | Redeem is advantageous (return to collateral) | Return hzUSD and receive collateral |

This naturally converges price deviations. Fees are dynamically adjusted to prevent flows from becoming too unidirectional.

***

### 5. Frequently Asked Questions (FAQ)

**Q1. Can I use the redeemed HYPE immediately?**

A. Yes. Immediately after being reflected in your wallet, it can be freely sent or traded. (HYPE conversion on DEX is also available.)



**Q2. Why are fees high during Redeem?**

A. Fees are a stabilization mechanism to suppress excessive unidirectional flow. When Redeem demand surges, fees temporarily increase. This indicates the market is temporarily imbalanced.



**Q3. My Redeem is stuck in Pending status.**

A. Queue Mode may have been activated. Check the Queue Size in "System Status" in the app and retry after some time. Pending status can also be confirmed on a block explorer.



**Q4. Which is better, Redeem or selling on DEX?**

A. It depends on the situation.

* If DEX price is near 1.00, it's faster and simpler than Redeem.
* If hzUSD is trading below 1.00, you may receive more kHYPE through Redeem. Ultimately, check the Quote in the app to decide.



**Q5. Is there a Redeem limit?**

A. Dynamic limits may be set at the system level. There are no limits for individual users, but temporary constraints may apply when Queue is activated.

***

### 6. Risks and Considerations

<table><thead><tr><th width="235.64630126953125">Category</th><th>Details</th></tr></thead><tbody><tr><td>Market Deviation Risk</td><td>Short-term differences may occur between DEX price and internal rate.</td></tr><tr><td>Fee Volatility Risk</td><td>Fees may surge when Redeem demand concentrates.</td></tr><tr><td>Queue Delay Risk</td><td>Time lags occur due to FIFO processing when large request volumes are generated.</td></tr><tr><td>Smart Contract Risk</td><td>Even audited contracts are not completely risk-free.</td></tr></tbody></table>

***

### 7. Design Rationale (Why Redeem Exists)

Hypezion Finance's Redeem mechanism is designed to simultaneously achieve three elements: stability, liquidity, and reliability.

* **Stability:** Natural correction mechanism when price deviation occurs
* **Liquidity:** Collateral recovery path always secured
* **Reliability:** Safety valve to prevent the no-liquidation design from collapsing

Through this, the entire protocol maintains "structural stability that constantly restores balance."
