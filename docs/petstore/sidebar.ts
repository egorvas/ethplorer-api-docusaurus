import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "petstore/ethplorer",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "petstore/api-controller-get-block-tx-info",
          label: "ApiController_getBlockTxInfo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-block-info",
          label: "ApiController_getBlockInfo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-blocks-info",
          label: "ApiController_getBlocksInfo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-last-block",
          label: "ApiController_getLastBlock",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-token-info",
          label: "ApiController_getTokenInfo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-top",
          label: "ApiController_getTop",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-top-tokens",
          label: "ApiController_getTopTokens",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-tx-info",
          label: "ApiController_getTxInfo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-token-history",
          label: "ApiController_getTokenHistory",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-addresss-history",
          label: "ApiController_getAddresssHistory",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-address-transactions",
          label: "ApiController_getAddressTransactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-address-info",
          label: "ApiController_getAddressInfo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-top-token-holders",
          label: "ApiController_getTopTokenHolders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "petstore/api-controller-get-tokens-new",
          label: "ApiController_getTokensNew",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
