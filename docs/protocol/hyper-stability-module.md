---
sidebar_position: 6
title: Hyper Stability Module
---

# Hyper Stability Module

The Hyper Stability Module is the stability control layer of Hypezion Finance. It monitors system-wide health in real-time and automatically adjusts operations such as issuance volume, redemption speed, and fees as needed.

This module switches the protocol's state based on the Coverage Ratio (CR), applying different fee settings for each zone to realize a self-stabilizing mechanism even within a no-liquidation structure.

---

## 1. System Zones Overview

Hypezion Finance operates in three distinct zones based on Coverage Ratio:

| Zone           | CR Range          | Primary Behavior                                                        |
| -------------- | ----------------- | ----------------------------------------------------------------------- |
| Healthy Zone   | CR ≥ 150%         | Normal Mint/Redeem, standard fees (0.3%)                                |
| Cautious Zone  | 130% ≤ CR < 150%  | Reduced fees (0.2%) to encourage redemptions and restore CR             |
| Critical Zone  | CR < 130%         | Minimal fees (0.1%), Stability Pool intervention may trigger            |

These zones transition automatically based on the Coverage Ratio, with each change recorded as on-chain events.

---

## 2. Key Monitoring Indicators (Ratios)

**(1) Coverage Ratio (CR)**

$$
CR = \frac{\text{Total Reserve in HYPE}}{\text{hhzUSD Liabilities in HYPE}} \times 100\%
$$

* Core indicator showing system-wide collateral health.
* Determines the current system zone and fee structure.
* Calculated using available reserves plus locked kHYPE pending redemptions.

**(2) Buffer Ratio (BR)**

$$
BR = \frac{\text{Collateral TVL} - \text{hhzUSD Supply}}{\text{Collateral TVL}}
$$

* Indicator representing residual collateral proportion, directly linked to bullHYPE risk tolerance.
* When declining, bullHYPE issuance is restricted and shhzUSD reward ratio increases.

**(3) Peg Deviation (PD)**

$$
PD = |P_{hhzUSD} - 1.00|
$$

* Deviation rate showing how far hhzUSD market price is from the peg ($1).
* When PD exceeds threshold, fees and caps are dynamically adjusted.

**(4) Oracle Confidence (OC)**

$$
OC = 1 - \frac{|\text{Primary} - \text{Fallback}|}{\text{Primary}}
$$

* Indicator measuring agreement between oracles.
* The OracleAggregator uses weighted median from multiple sources (HyperCore, Pyth, RedStone, Chainlink).

**(5) Utilization (U)**

$$
U = \frac{\text{hhzUSD Supply}}{\text{hhzUSD Cap}}
$$

* Utilization rate against hhzUSD issuance cap.
* If too high, fees automatically increase and Mint suppression is applied.

---

## 3. Zone Transition Logic

Zones automatically change based on the Coverage Ratio (CR):

$$
\begin{aligned}
&\text{if } CR \geq 150\% \Rightarrow \text{Healthy Zone} \\
&\text{if } 130\% \leq CR < 150\% \Rightarrow \text{Cautious Zone} \\
&\text{if } CR < 130\% \Rightarrow \text{Critical Zone}
\end{aligned}
$$

**Healthy → Cautious**

* When CR declines below 150%
* Fees reduced to encourage redemptions and restore CR

**Cautious → Critical**

* When CR falls below 130%
* Stability Pool intervention (`triggerIntervention`) becomes available
* Protocol converts hzUSD from Stability Pool to bullHYPE to reduce liabilities

**Recovery Path**

* When CR recovers above 150%, protocol can call `exitRecoveryMode`
* Converts bullHYPE back to hzUSD, restoring normal Stability Pool composition

---

## 4. Dynamic Fee Model

Fees are dynamically determined based on system zone (inverse relationship with CR):

| Zone      | CR Range          | Mint/Redeem Fee | Swap Fee | Rationale                              |
| --------- | ----------------- | --------------- | -------- | -------------------------------------- |
| Healthy   | ≥ 150%            | 0.3%            | 0.8%     | Standard operation, sustainable fees   |
| Cautious  | 130% - 150%       | 0.2%            | 0.8%     | Lower fees encourage redemptions       |
| Critical  | < 130%            | 0.1%            | 0.8%     | Minimal fees to maximize redemptions   |

**Key Design Principle**: Lower fees when CR is low encourages users to redeem, which burns hhzUSD and helps restore CR. This is the opposite of traditional models that increase fees during stress.

---

## 5. Stability Pool Intervention

When CR falls below 130% (Critical Zone), the protocol can trigger an intervention:

**`triggerIntervention()` Function**:
1. Calculates the amount of hzUSD liability reduction needed to restore CR to ~140%
2. Burns hzUSD from the Stability Pool
3. Mints equivalent bullHYPE to Stability Pool holders
4. Reduces system liabilities, improving CR

**`exitRecoveryMode()` Function**:
1. Available when CR recovers to ≥ 150%
2. Converts bullHYPE held by Stability Pool back to hzUSD
3. Restores normal Stability Pool composition

This mechanism ensures the protocol can autonomously defend its peg without requiring external intervention.

---

## 6. Autonomous Stability Loop

The Hyper Stability Module forms a self-stabilizing feedback loop:

$$
\begin{aligned}
&CR \downarrow \Rightarrow \text{Fees decrease} \Rightarrow \text{Redemptions encouraged} \Rightarrow \text{Supply decreases} \Rightarrow CR \uparrow \\
&CR \uparrow \Rightarrow \text{Fees normalize} \Rightarrow \text{Mints enabled} \Rightarrow \text{Supply stabilizes}
\end{aligned}
$$

Additionally, when CR < 130%:

$$
\text{Stability Pool Intervention} \Rightarrow \text{hzUSD burned} \Rightarrow \text{Liabilities reduced} \Rightarrow CR \uparrow
$$

Through this feedback control, the peg is maintained without external operations.

---

## 7. On-Chain Operation

* Zone transitions are executed automatically via `_updateSystemState()` after each mint/redeem operation.
* All state changes emit `SystemStateChanged(uint8 newState)` events for monitoring.
* Emergency alerts emit `EmergencyStateActivated(uint256 cr)` when CR falls below 100%.
* Each ratio is verifiable through view functions (`getSystemCR()`, `getCurrentFee()`).
