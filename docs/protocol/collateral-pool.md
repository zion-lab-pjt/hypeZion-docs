---
sidebar_position: 2
title: Collateral Pool
---

# Collateral Pool

The core of Hypezion Finance is built on the "Two Tokens, One Pool" structure. At its center lies the Collateral Pool. This serves as the foundation supporting system-wide safety, liquidity, and stability, directly linked to both hzUSD issuance and the price formation of the leveraged token (bullHYPE).

---

## 1. Overview

The Collateral Pool consists of a set of smart contracts operated on HyperEVM, serving three primary purposes:

1. **Value Backing**: All hzUSD is backed by collateral assets held in this pool.
2. **Leverage Structure Core**: The Leveraged HYPE Token (bullHYPE) is designed as a claim on the Residual Equity of this pool.
3. **Risk Distribution and Stability**: By combining multiple collateral types, the structure maintains peg stability without dependence on a single asset.

---

## 2. Collateral Asset Composition

The Collateral Pool is primarily composed of HYPE Token and major LSTs (Liquid Staking Tokens) of HYPE Token such as kHYPE and stHYPE. These are selected based on multiple criteria including market liquidity, price reliability, and oracle compatibility.

![Collateral Pool Composition](/img/collateral-pool.png)

In the initial phase, a collateral cap of 10M HYPE has been established to ensure controlled growth and risk management during the early stage of the protocol.

---

## 3. Basic Pool Accounting Formula

The entirety of the Collateral Pool is represented by the following identity:

$$
\text{Total Collateral Value} = \text{hzUSD Supply} + \text{Residual Equity (bullHYPE Value)}
$$

Here, Residual Equity corresponds to the underlying value of the Leveraged HYPE Token (bullHYPE), with leverage effects dynamically changing based on pool fluctuations. This structure enables natural profit and loss distribution without requiring liquidation.

---

## 4. Collateral Pool Stabilization and Liquidity

The Collateral Pool operates with constant reference to HYPE Token price, bullHYPE and hzUSD issuance volumes, Stability Pool capacity, and other factors. When collateral increases, hzUSD issuance capacity expands; conversely, when it decreases, minting is automatically constrained. This "autonomous control loop" achieves equilibrium between peg maintenance and liquidity.

---

## 5. Design Philosophy

The Collateral Pool of Hypezion Finance is not merely a collateral vault, but a "dynamic gravitational core" of finance. All tokens on Hypezion Finance (hzUSD, shzUSD, bullHYPE) are linked to this core, with liquidity and risk circulating organically. Therefore, the health of the Collateral Pool defines the stability and credibility of Hypezion Finance as a whole. In other words, Collateral Pool = Protocol Health Meter.
