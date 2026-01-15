---
sidebar_position: 3
title: hzUSD – No Liquidation Stablecoin
---

# hzUSD – No Liquidation Stablecoin

hzUSD is the core token of Hypezion Finance and a No-Liquidation stablecoin issued on HyperEVM. Its design purpose is to eliminate the "liquidation cascades" and "capital inefficiency" inherent in traditional overcollateralized stablecoins, while maintaining peg stability across the entire system at all times.

---

## 1. Design Philosophy

hzUSD maintains stability based on system-wide health rather than individual account safety ratios. Therefore, user-level liquidations do not exist, and the peg (around 1 USD) is maintained through systemic risk absorption and redistribution.

This design yields the following characteristics:

* **No Liquidation**: Positions are not force-liquidated during price declines; the Hyper Stability Module absorbs losses across the protocol (including the Stability Pool) and HYPE Token holders.
* **Continuous Peg**: Stabilizes around $1 through Mint/Redeem mechanisms and arbitrage via external DEXs.
* **Unified Liquidity**: All users share the same pool, preventing liquidity fragmentation.
* **Self-Stabilizing Mechanism**: Dynamically controls Mint/Redeem and fees based on system indicators (CR, BR, PD).

---

## 2. Issuance Structure

hzUSD is issued by depositing collateral assets into the Collateral Pool. All collateral is tokenized on HyperEVM, and the supply cap is determined based on real-time oracle valuations.

**Issuance Flow**

1. Users deposit HYPE Token as collateral into the Collateral Pool
2. System verifies the Coverage Ratio (CR)
3. If CR meets the threshold (> 100%), hzUSD is minted
4. Mint quantity is determined by collateral value and dynamic CR parameters

**Redemption Flow**

1. Users return hzUSD
2. Pool burns hzUSD at redemption price (Peg)
3. Collateral is returned, and fees are redistributed to the pool

These processes execute fully on-chain, with all transactions recorded as event logs.

---

## 3. Peg Mechanics

hzUSD price stability is maintained through three layers:

| Layer     | Mechanism               | Effect                                                 |
| --------- | ----------------------- | ------------------------------------------------------ |
| Primary   | Mint/Redeem at $1       | Direct arbitrage opportunity when price deviates from peg |
| Secondary | Dynamic Fee Adjustment  | Suppresses excessive issuance/redemption based on CR and PD |
| Tertiary  | DEX Arbitrage           | Market participants profit from price deviation, naturally restoring peg |

This triple-layered structure maintains the peg even during short-term market distortions or collateral fluctuations.

---

## 4. Loss Absorption and No Liquidation Mechanism

In typical CDP models, liquidation triggers when collateral value falls below a certain threshold. Hypezion Finance completely eliminates this, ensuring price stability through protocol-wide profit and loss adjustment.

**Socialized Loss Absorption**

* When CR falls below a certain threshold due to price shocks, the Stability Pool automatically activates
* hzUSD in the Stability Pool is automatically burned and receives bullHYPE, balancing the bullHYPE and hzUSD within the overall Collateral Pool
* As a result, losses are thinly distributed across the system, eliminating the need for individual position liquidations

This mechanism fundamentally differs from existing DeFi liquidation structures in that forced selling does not occur during market crashes, maintaining a stable peg.

---

## 5. Relationship with Stability Pool

hzUSD can be converted to shzUSD by depositing into the Stability Pool, contributing to system safety while earning yields.

This relationship is defined as follows:

During price fluctuations, the Stability Pool absorbs gains and losses to maintain this equation's equilibrium. Details are explained in the next chapter.

---

## 6. Value Maintenance Formula Model

$$
\begin{aligned}
&\textbf{Peg Condition:} \\
&\text{Mint Allowed, if } CR > CR_{min} \\
&\text{Redeem Premium, if } CR < CR_{min}
\end{aligned}
$$

Here, CR (Coverage Ratio) is an indicator representing the health of the Collateral Pool and serves as the core parameter for peg maintenance, monitored under Modes & Ratios.

---

## 7. Key Parameters

| Parameter           | Description                      | Typical Range |
| ------------------- | -------------------------------- | ------------- |
| CR (Coverage Ratio) | Collateral Pool health indicator | 120-200%      |
| BR (Backing Ratio)  | Direct backing ratio for hzUSD   | 100-150%      |
| PD (Peg Deviation)  | Deviation from 1 USD             | ±5%           |
| Mint Fee            | Dynamic fee at issuance          | 0.1-2%        |
| Redeem Fee          | Dynamic fee at redemption        | 0.1-2%        |

---

## 8. Dynamic Fee Model

Fees are dynamically determined based on peg deviation and collateral conditions.

* **CR (Coverage Ratio)**: Fee increases as collateral capacity decreases
* **PD (Peg Deviation)**: Fee increases as peg deviation grows
* **Mode**: During Volatile/Halt modes, issuance is restricted and redemption is prioritized

These multiple parameters automatically suppress mass issuance and excessive redemption, maintaining the hzUSD price peg.

As a result, the following loop operates to form a consistent hzUSD peg cycle across price, supply, and collateral:

$$
\begin{aligned}
&\text{Collateral} \uparrow \rightarrow CR \uparrow \rightarrow \text{Mint allowed} \rightarrow \text{Supply} \uparrow \rightarrow \text{Price} \downarrow \rightarrow \text{Peg stabilizes} \\
&\text{Collateral} \downarrow \rightarrow CR \downarrow \rightarrow \text{Mint restricted} \rightarrow \text{Redemption prioritized} \rightarrow \text{Supply} \downarrow \rightarrow \text{Peg stabilizes}
\end{aligned}
$$

---

## 9. Comparison and Positioning

Below are the differences from the CDP model, which may be confused as a similar stablecoin model. The CDP model is generally known as the MakerDAO (now Sky) model.

| Feature            | hzUSD (Hypezion)               | CDP (MakerDAO-style)                          |
| ------------------ | ------------------------------ | --------------------------------------------- |
| Liquidation        | None                           | Exists                                        |
| Capital Efficiency | High (system-wide CR)          | Low (individual CR)                           |
| Loss Absorption    | Socialized (Stability Pool)    | Individual liquidation                        |
| Peg Mechanism      | Triple-layer (Mint/Redeem/DEX) | Collateral liquidation + Peg Stability Module |
| Collateral         | HYPE and LSTs                  | Multiple assets (ETH, stablecoins, etc.)      |
| User Experience    | No liquidation risk            | Constant monitoring required                  |
