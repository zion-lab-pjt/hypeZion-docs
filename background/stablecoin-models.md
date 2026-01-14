---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/cvdQOULzcasMgbUwaABJ/background/stablecoin-models
---

# Stablecoin Models

Stablecoins are the foundational primitive in the crypto market, functioning as a store of value, unit of account, and settlement layer. All use cases including DeFi, trading, lending, derivatives, and payments presuppose the existence of a stable value standard, and the design philosophy of stablecoins determines the risk structure and capital efficiency of the entire ecosystem.

Current stablecoins are broadly classified into centralized stablecoins and decentralized stablecoins, based on their design philosophy and where risk resides.

***

## **Centralized Stablecoins**

Centralized stablecoins operate on a model where the issuer holds fiat currency, short-term government bonds, and cash equivalents off-chain, backing the issuance of tokens with these reserves. USDC and USDT are representative examples of this model, functioning as the de facto base currency of the crypto asset market through high liquidity, stability, and superior UX.

However, this model inherently embeds a structure where crypto assets remain dependent on centralized trust." Reserve assets are not fully verifiable on-chain and are strongly influenced by external factors such as issuer governance, regulatory authority decisions, and dependence on banking infrastructure. The technical possibility of freezing or seizure also represents a significant constraint from a permissionless finance perspective.

As a result, while centralized stablecoins possess high utility, they constantly carry the trade-off of systemic risk and lack of censorship resistance.

***

## **Decentralized Stablecoins**

Decentralized stablecoins pursue on-chain issuance and management through smart contracts. Representative approaches include over-collateralized, delta-hedged, and algorithmic models.

#### Over-Collateralized: MakerDAO

MakerDAO's DAI (now branded as USDS under the Sky ecosystem) is issued with ETH as collateral, offering high transparency and years of operational track record. However, the high collateral ratios required for stability result in inherently low capital efficiency. Additionally, reliance on liquidation mechanisms can introduce systemic fragility during sharp market volatility.

#### Delta-Hedged: Ethena

Ethena's USDe achieves stability through a delta-neutral strategy, combining spot long positions in BTC, ETH, and other assets with perpetual futures shorts. This design maintains USDe's value while generating yields, improving capital efficiency compared to over-collateralized models. However, the model depends heavily on derivatives market liquidity, funding rate structures, and exchange risk, making resilience under changing market conditions a key consideration.

#### Algorithmic: Terra

Terra's algorithmic stablecoin, UST (TerraUSD), attempted to achieve price stability through a burn-mint mechanism with the LUNA token. Theoretically, this model offered high capital efficiency without requiring external collateral, but the peg collapsed under external stress. This case demonstrates the structural risks of algorithmic stablecoins at the protocol layer. When a blockchain's core functions depend on an algorithmic stablecoin, the tightly coupled design can create systemic vulnerability under stress.

As these cases demonstrate, decentralized stablecoins have gained transparency and sovereignty while introducing new challenges such as capital efficiency, liquidation risk, and market dependency.

***

## **The Hypezion Finance Approach**

Hypezion Finance is designed with the successes and failures of these existing models as foundational premises. By adopting a structure where on-chain pooled collateral natively generates yield, it constructs a stablecoin that embeds the productivity of the entire ecosystem, rather than merely serving as a "mechanism to fix value."

Hypezion Finance's stablecoin hzUSD is a yield-native stablecoin issued on the Hyperliquid ecosystem without liquidations. It uses Hyperliquid's HYPE Token as core collateral to enhance stability. The design pursues both stability and capital efficiency through multiple revenue sources and on-chain risk management, without relying on over-collateralization, external custody, or single hedging strategies.
