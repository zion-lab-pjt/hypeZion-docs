import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'index',
        {
          type: 'category',
          label: 'How to Start',
          items: [
            'introduction/how-to-start/index',
            'introduction/how-to-start/buy-hzusd',
            'introduction/how-to-start/earn-yield-with-stablecoin-shzusd',
            'introduction/how-to-start/buy-leveraged-hype-tokens-bullhype',
            'introduction/how-to-start/redeem-to-collateral-hzusd-hype',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Background',
      items: [
        'background/stablecoin-models',
        'background/cost-of-long-term-leverage',
      ],
    },
    {
      type: 'category',
      label: 'Protocol',
      items: [
        'protocol/design-overview',
        'protocol/collateral-pool',
        'protocol/hzusd-no-liquidation-stablecoin',
        'protocol/shzusd-yield-from-stability-pool',
        'protocol/bullhype-leveraged-hype-token',
        'protocol/hyper-stability-module',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/audits',
        'security/addresses',
        'security/general-risk-disclosures',
      ],
    },
  ],
};

export default sidebars;
