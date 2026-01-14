---
description: Architecture
metaLinks:
  alternates:
    - https://app.gitbook.com/s/cvdQOULzcasMgbUwaABJ/protocol/design-overview
---

# Design Overview

## 1. Objective and Background

Hypezion Finance is designed as a decentralized finance (DeFi) infrastructure on HyperEVM that integrates three core dimensions: leverage, stable value through stablecoins, and high yields. The "stable value" here does not refer to a centralized dollar-pegged model, but rather a value backed by on-chain assets (primarily HYPE and its LSTs). "Leverage" aims not for traditional derivative structures with liquidation risk, but for a mechanism that eliminates or minimizes liquidation risk by design.

To achieve this, the architecture adopts the "Two Tokens, One Pool" structure as a design principle. Rather than maintaining dedicated pools for each token, this approach builds multiple user-facing positions around a single collateral pool, optimizing capital efficiency, risk distribution, and user optionality.

***

## 2. Core Concept: Two Tokens, One Pool

<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

In this configuration, the "One Pool" refers to the protocol-wide shared collateral asset pool and accounting system. This collateral pool accepts multiple asset types centered on HYPE, and operates on the value of these assets along with staking rewards and yield generation as the protocol's foundation.

The "Two Tokens" typically consist of:

* **Stablecoin (hzUSD)**: This stablecoin is mintable and redeemable, representing a debt position issued against the collateral pool. Users deposit collateral to mint this stablecoin, enabling value preservation and access to pegged stable value. Users can also utilize this stablecoin to earn high yields.
* **Leveraged Token / Residual-Claim Token (bullHYPE)**: This token represents a claim on the "overcollateralization" or "excess value (Collateral Value − Stable Liabilities)" remaining in the collateral pool. In other words, it is designed to benefit from collateral pool growth and appreciation while being the first to absorb impact when collateral value declines.

By consolidating assets in "One Pool" and generating two positions (tokens) representing "stable value / leveraged value" on the same collateral base, the following advantages are realized:

* **Enhanced Capital Efficiency**: By centralizing collateral rather than fragmenting it, the protocol dynamically optimizes the mintable quantities of both stablecoins and leveraged tokens relative to the underlying collateral asset value.
* **Risk Sharing and Transparency**: With a common total value, composition, and yield structure within the collateral pool, the overall protocol health becomes more transparent.
* **Clear User Optionality**: Users can explicitly choose between "seeking stability" or "taking leverage," with both options originating from the same collateral base for coherent design.

***

## 3. Why This Structure

Traditional stablecoin and leverage designs face typical challenges:

* **Centralized Stablecoins**: Most depend on fiat currency reserves, making them inherently centralized.
* **Decentralized Stablecoins**: While several decentralized stablecoin models exist, many struggle with peg maintenance when on-chain liquidity is insufficient, or face liquidity risks.
* **Leveraged Products**: Liquidation risk, chain risk, funding rate costs, and liquidity risk create burdens for users.
* **Protocol Fragmentation**: When collateral, stable tokens, and leveraged tokens operate under separate designs, capital efficiency suffers and audit and operational costs increase.

Given these considerations, this protocol aims to "use on-chain assets as collateral," "realize leverage structures that eliminate or minimize liquidation," and "pursue capital efficiency while maintaining transparent risk design," adopting the Two Tokens, One Pool structure as its solution.
