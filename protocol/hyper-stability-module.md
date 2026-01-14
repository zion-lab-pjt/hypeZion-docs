---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/cvdQOULzcasMgbUwaABJ/protocol/hyper-stability-module
---

# Hyper Stability Module

The Hyper Stability Module is the stability control layer of Hypezion Finance. It monitors system-wide health in real-time and automatically adjusts operations such as issuance volume, redemption speed, and fees as needed.

This module switches the protocol's state into "modes" in response to collateral price fluctuations and market volatility, applying different parameter settings (ratios) for each mode to realize a self-stabilizing mechanism even within a no-liquidation structure.

***

## 1. Mode Overview

Hypezion Finance always operates in one of the following three modes:

| Mode          | State                                        | Primary Behavior                                                      |
| ------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| Normal Mode   | Market stable, CR sufficiently high          | Normal Mint/Redeem, minimized fees                                    |
| Volatile Mode | Volatility rising, peg deviation expanding   | Mint restricted, Redeem prioritized, fees increased                   |
| Halt Mode     | Collateral crashes, CR falls below threshold | All Mint/Redeem temporarily suspended, SP automatic defense activated |

These modes are designed to transition continuously, with each mode switch automatically executed based on on-chain defined monitoring indicators (Ratios).

***

## 2. Key Monitoring Indicators (Ratios)

**(1) Coverage Ratio (CR)**

<p align="center"><span class="math">CR = \frac{\text{Collateral TVL}}{\text{hzUSD Supply}}</span></p>

<p align="center"></p>

* Basic indicator showing system-wide collateral health.
* Issuance restricted below 100%, transitions to Volatile Mode around 90%.



**(2) Buffer Ratio (BR)**

<p align="center"><span class="math">BR = \frac{\text{Collateral TVL} - \text{hzUSD Supply}}{\text{Collateral TVL}}</span></p>



* Indicator representing residual collateral proportion, directly linked to bullHYPE risk tolerance.
* When declining, bullHYPE issuance is restricted and shzUSD reward ratio increases.



**(3) Peg Deviation (PD)**

<p align="center"><span class="math">PD = |P_{hzUSD} - 1.00|</span></p>



* Deviation rate showing how far hzUSD market price is from the peg ($1).
* When PD exceeds threshold, fees and caps are dynamically adjusted.



**(4) Oracle Confidence (OC)**

<p align="center"><span class="math">OC = 1 - \frac{|\text{Primary} - \text{Fallback}|}{\text{Primary}}</span></p>



* Indicator measuring agreement between oracles.
* When OC falls below a certain value, automatically transitions to Volatile Mode and temporarily restricts new Mints.



**(5) Utilization (U)**

<p align="center"><span class="math">U = \frac{\text{hzUSD Supply}}{\text{hzUSD Cap}}</span></p>



* Utilization rate against hzUSD issuance cap.
* If too high, fees automatically increase and Mint suppression is applied.

***

## 3. Mode Transition Logic

Modes automatically change based on composite conditions of the above indicators.

```
if CR > 110% and PD < 0.005 → Normal Mode
if 95% ≤ CR ≤ 110% or PD ≥ 0.005 → Volatile Mode
if CR < 95% or OC < 0.9 → Halt Mode
```

**Normal → Volatile**

* When CR declines or peg deviation exceeds a certain level
* New Mints partially restricted, Redeem prioritized

**Volatile → Halt**

* When Collateral crashes and CR falls below threshold
* All issuance stopped, Stability Pool automatically activated

**Halt → Normal**

* When CR and OC recover and PD returns below threshold
* All operations resumed

***

## 4. Dynamic Parameter Adjustment

In each mode, the following parameters are automatically reconfigured:

| Parameter           | Normal | Volatile   | Halt                |
| ------------------- | ------ | ---------- | ------------------- |
| Mint Fee            | 0.1%   | 0.5%\~1.0% | Stopped             |
| Redeem Fee          | 0.1%   | 0.2%       | Stopped             |
| Mint Cap            | 100%   | 60\~80%    | 0%                  |
| Oracle Trust Weight | 1.0    | 0.7        | 0.3                 |
| SP Activation       | Low    | Medium     | High (auto-trigger) |

This ensures the protocol always maintains behavior that "prioritizes health over liquidity."

***

## 5. Autonomous Stability Loop

Modes & Ratios is the core circuit for realizing system autonomy and stability.

```
CR ↓ ⇒ Mint restricted & Fee increases ⇒ Supply decreases ⇒ CR recovers
PD ↑ ⇒ Redeem promoted & Cap adjusted ⇒ Price reverts ⇒ PD decreases
```

Through this feedback control, the peg is maintained without external operations.

***

## 6. On-Chain Operation

* Monitoring logic periodically retrieves feeds from the Oracle Layer and updates ratios.
* Mode transitions are executed via automatic triggers, with all changes recorded in event logs.
* Each state change (ModeChanged, RatioUpdated) is verifiable as an open audit log.
