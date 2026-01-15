---
sidebar_position: 4
title: shzUSD - Yield from Stability Pool
---

# shzUSD - Yield from Stability Pool

shzUSD is the core token supporting the stability and yield of Hypezion Finance. It is the receipt token users receive when depositing hzUSD into the Stability Pool (hereafter SP), functioning as the system-wide safety valve.

The purpose of shzUSD is to simultaneously achieve "risk socialization and reward distribution." This enables Hypezion Finance to maintain system health without liquidations while allowing long-term issuance of leveraged tokens and stable supply of stablecoins.

---

## 1. Basic Structure

The Stability Pool is a risk-absorbing reserve pool formed by users depositing hzUSD.

Users who deposit into this pool receive shzUSD in return.

* Deposit: hzUSD → shzUSD (1:1 rate)
* Withdrawal: shzUSD → hzUSD (+ rewards)
* Value fluctuation: Fluctuates in line with SP's Net Asset Value (NAV)

The price of shzUSD is defined by its share ratio relative to the SP's total asset value:

$$
P_{shzUSD} = \frac{\text{Total SP Value}}{\text{Total shzUSD Supply}}
$$

---

## 2. Roles and Functions

shzUSD has three primary roles:

| Function                  | Description                                                                  | Effect                                                  |
| ------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------- |
| 1. Loss Absorption Layer  | SP temporarily absorbs losses when collateral prices crash                   | Maintains system health without individual liquidations |
| 2. Stability Supply Layer | Foundation constantly supporting CR (Coverage Ratio)                         | Ensures peg stability                                   |
| 3. Yield Generation Layer | Distributes fees, collateral rewards, and discounted collateral acquisitions | Long-term reward model                                  |

This allows shzUSD to function as both a "token supporting stability" and a "yield-bearing asset."

---

## 3. Deposit and Withdrawal Flow

**Deposit**

1. User sends hzUSD to SP
2. SP issues equivalent shzUSD (1:1)
3. Deposit reflects immediately; shzUSD issuance based on NAV

**Withdrawal**

1. User returns shzUSD
2. hzUSD (+ collateral rewards) is refunded according to NAV
3. Cooldown period may apply (e.g., 24h)

---

## 4. Yield Sources

The Stability Pool accumulates operational gains through staking and other activities of the collateral pool, in addition to deposited hzUSD. Therefore, the SP's NAV (Net Asset Value) often exceeds the NAV of deposited hzUSD, and generally the value of shzUSD, as its share token, also exceeds the value of hzUSD.

The yield of shzUSD is generated from staking rewards of collateral assets, meaning shzUSD realizes "stable yield as compensation for accepting system risk."

---

## 5. Loss Absorption Mechanism

In a structure without liquidations, shzUSD is the frontline supporting system health.

1. Coverage Ratio (CR) falls below threshold due to collateral price decline
2. SP automatically burns a portion of hzUSD and acquires discounted collateral
3. Loss is temporarily absorbed by the shzUSD layer
4. NAV recovers through market recovery and reward accumulation

Through this sequence, overall stability is restored without individual liquidations.

---

## 6. NAV Model (Value Calculation Formula)

The per-token value of shzUSD is defined by the following formula:

$$
V_{shzUSD} = \frac{\text{SP Assets (Collateral + Fees + Rewards)}}{\text{shzUSD Supply}}
$$

SP's NAV is re-evaluated at each event, and through:

* Collateral price appreciation within SP
* Income accumulation from Staking Rewards of Hypezion Finance's overall collateral
* Collateral acquisition after loss absorption

the value of shzUSD increases long-term (Yield-bearing Stablecoin).

---

## 7. Risk-Reward Characteristics

| Item             | hzUSD              | shzUSD                          | bullHYPE              |
| ---------------- | ------------------ | ------------------------------- | --------------------- |
| Stability        | High               | Medium                          | Low                   |
| Yield            | Low                | Medium                          | High                  |
| Liquidation Risk | None               | Partial absorption              | Maximum absorption    |
| Target Holders   | Stability-oriented | Medium to long-term risk takers | High-risk speculators |

shzUSD is positioned as the intermediate layer between hzUSD and bullHYPE, designed as "an option balancing stability and returns."

---

## 8. On-Chain Behavior

The Stability Pool is fully managed on-chain, with state updates occurring at the following event units:

* `Deposit()` — Deposit
* `Withdraw()` — Withdrawal
* `AbsorbLoss()` — Loss absorption
* `DistributeReward()` — Reward distribution

All of these are recorded in event logs and traceable via block explorers.

---

## 9. Economic Feedback Loop

The Stability Pool is a critical component for the proper operation of Hypezion Finance overall.

$$
CR \downarrow \Rightarrow \text{SP Activation} \Rightarrow \text{Loss Absorption} \Rightarrow \text{NAV Recovery} \Rightarrow CR \uparrow
$$

By operating this cycle autonomously, the entire system maintains stability against market volatility without cascading liquidations.
