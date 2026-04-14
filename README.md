# BlueMonk TypeScript SDK

This SDK supports all of the operations of BlueMonk's Integration API and Management API.

## Installation

Install via [npm](https://www.npmjs.com/package/bluemonk-sdk):

```shell
npm install bluemonk-sdk
```

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/).

The module supports the following:

- Environments
  - Node.js
  - Webpack
  - Browserify
- Language levels
  - ES6
- Module systems
  - CommonJS
  - ES6 module system

## Development

To build the TypeScript source code, you need to have Node.js (>=20) and npm installed.
After cloning the repository, navigate to the `sdk` directory and run:

```bash
npm install
npm run build
```

## Determining the base URL of the endpoints

The API is available at the same hostname as your BlueMonk deployment.
For example, if your BlueMonk instance is running at `https://api.yourcompany.com`,
set the base path to `https://api.yourcompany.com`.

## Getting started

### Integration API

The following code shows an example of using the Integration API:

```typescript
import { ApiClient, IntegrationApi } from "bluemonk-sdk";

// Configure API client
const defaultClient = ApiClient.instance;
defaultClient.basePath = "https://api.yourcompany.com";

const integrationKey = defaultClient.authentications["integration_api_key"];
integrationKey.apiKey = "your-integration-api-key";

const integrationApi = new IntegrationApi();

// Example: Upsert a customer session with cart items
integrationApi
  .upsertSession({
    integrationId: "session-001",
    integrationAPISessionUpdateBody: {
      customerSession: {
        profileId: "cust-001",
        state: "open",
        cartItems: [
          {
            sku: "ts-100",
            quantity: 1,
            price: 29.99,
            attributes: { name: "Premium T-Shirt", category: "apparel" },
          },
          {
            sku: "cap-200",
            quantity: 2,
            price: 14.99,
            attributes: { name: "Baseball Cap", category: "accessories" },
          },
        ],
        couponCodes: ["SUMMER20"],
      },
    },
  })
  .then(
    (data) => {
      console.log(JSON.stringify(data, null, 2));

      // Handle triggered effects from the rule engine
      data.effects?.forEach((effect) => {
        console.log(`Effect: ${effect.effectType} - Campaign: ${effect.campaignId}`);
      });
    },
    (err) => {
      console.error(err);
    }
  );

// Example: Upsert a customer profile
integrationApi
  .upsertCustomer({
    integrationId: "cust-001",
    integrationAPICustomerUpsertBody: {
      attributes: {
        tier: "gold",
        points: 1500,
      },
    },
  })
  .then(
    (data) => {
      console.log("Customer upserted:", JSON.stringify(data, null, 2));
    },
    (err) => {
      console.error(err);
    }
  );

// Example: Track a custom event
integrationApi
  .trackEvent({
    integrationAPIEventTrackBody: {
      profileId: "cust-001",
      type: "pageView",
      attributes: {
        url: "/products/premium-tshirt",
      },
    },
  })
  .then(
    (data) => {
      console.log("Event tracked:", JSON.stringify(data, null, 2));
    },
    (err) => {
      console.error(err);
    }
  );

// Example: Sync catalog items
integrationApi
  .syncCatalogItems({
    catalogId: 1,
    catalogSyncRequest: {
      actions: [
        {
          type: "ADD",
          payload: {
            sku: "ts-100",
            price: 29.99,
            attributes: { category: "apparel", color: "blue" },
          },
        },
      ],
    },
  })
  .then(
    (data) => {
      console.log("Catalog synced:", JSON.stringify(data, null, 2));
    },
    (err) => {
      console.error(err);
    }
  );
```

### Management API

The following code shows an example of using the Management API:

```typescript
import { ApiClient, ManagementApi } from "bluemonk-sdk";

// Configure API client
const defaultClient = ApiClient.instance;
defaultClient.basePath = "https://api.yourcompany.com";

const managementKey = defaultClient.authentications["management_api_key"];
managementKey.apiKey = "your-management-api-key";

const managementApi = new ManagementApi();

// Example: List all campaigns for an application
managementApi.listCampaigns({ applicationId: 1 }).then(
  (data) => {
    console.log("Campaigns:", JSON.stringify(data, null, 2));
  },
  (err) => {
    console.error(err);
  }
);

// Example: Get a specific campaign
managementApi.getCampaign({ applicationId: 1, campaignId: 10 }).then(
  (data) => {
    console.log(`Campaign: ${data.data?.name} - State: ${data.data?.state}`);
  },
  (err) => {
    console.error(err);
  }
);

// Example: List stores
managementApi
  .listStores({ applicationId: 1, pageSize: 25, skip: 0 })
  .then(
    (data) => {
      console.log("Stores:", JSON.stringify(data, null, 2));
    },
    (err) => {
      console.error(err);
    }
  );

// Example: Create a store
managementApi
  .createStore({
    applicationId: 1,
    createStoreRequest: {
      name: "Downtown Store",
      integrationId: "store-downtown-001",
      description: "Main downtown location",
      attributes: {},
    },
  })
  .then(
    (data) => {
      console.log("Store created:", JSON.stringify(data, null, 2));
    },
    (err) => {
      console.error(err);
    }
  );

// Example: Create a custom attribute
managementApi
  .createAttribute({
    createAttributeManagementAPIRequest: {
      entity: "customer",
      type: "string",
      name: "loyaltyTier",
      title: "Loyalty Tier",
      description: "Customer loyalty program tier level",
    },
  })
  .then(
    (data) => {
      console.log("Attribute created:", JSON.stringify(data, null, 2));
    },
    (err) => {
      console.error(err);
    }
  );

// Example: Create coupons for a campaign
// Use silent: "no" to receive the created coupon data in the response
managementApi
  .createCoupons({
    applicationId: 1,
    campaignId: 10,
    silent: "no",
    createCouponRequest: {
      numberOfCoupons: 1,
      usageLimit: 0,
      recipientIntegrationId: "cust1",
      couponPattern: "####",
      validCharacters: [],
      implicitlyReserved: false,
      isReservationMandatory: false,
      reservationLimit: 3,
      attributes: {},
      value: "",
    },
  })
  .then(
    (data) => {
      console.log("Coupons created:", JSON.stringify(data, null, 2));
    },
    (err) => {
      console.error(err);
    }
  );
```

## Documentation

### API Endpoints

All URIs are relative to your BlueMonk deployment base URL.

#### Integration API

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| **bulkUpsertCustomers** | **PUT** /v1/customers | Bulk upsert customers |
| **cancelCouponReservationsForCustomers** | **DELETE** /v1/coupon_reservations/{couponValue} | Cancel coupon reservations |
| **getCustomerInventory** | **GET** /v1/customers/{integrationId}/inventory | Get customer inventory |
| **getSession** | **GET** /v1/sessions/{integrationId} | Get session |
| **reserveCouponForCustomers** | **POST** /v1/coupon_reservations/{couponValue} | Reserve coupon for customers |
| **syncCatalogItems** | **PUT** /v1/catalogs/{catalogId}/sync | Sync catalog items |
| **trackEvent** | **POST** /v1/events | Track event |
| **upsertCustomer** | **PUT** /v1/customers/{integrationId} | Upsert customer |
| **upsertSession** | **PUT** /v1/sessions/{integrationId} | Upsert session |

#### Management API

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| **applicationWideCouponSearch** | **POST** /v1/applications/{applicationId}/coupons_search_advanced/no_total | Search coupons across application |
| **createAttribute** | **POST** /v1/attributes | Create a custom attribute |
| **createCoupons** | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Create coupons |
| **createStore** | **POST** /v1/applications/{applicationId}/stores | Create store |
| **deleteStore** | **DELETE** /v1/applications/{applicationId}/stores/{storeId} | Delete store |
| **getCampaign** | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get campaign |
| **getStore** | **GET** /v1/applications/{applicationId}/stores/{storeId} | Get store |
| **listCampaigns** | **GET** /v1/applications/{applicationId}/campaigns | List campaigns |
| **listCoupons** | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List coupons |
| **listStores** | **GET** /v1/applications/{applicationId}/stores | List stores |
| **updateCampaign** | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId} | Update campaign |
| **updateCoupon** | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Update coupon |
| **updateStore** | **PUT** /v1/applications/{applicationId}/stores/{storeId} | Update store |

### Models

- AttributeManagementAPIResponse
- BulkUpsertCustomersRequest
- BulkUpsertCustomersResponse
- CampaignResponse
- CampaignState
- CampaignStatus
- CancelCouponReservationsRequest
- CatalogItemsFilter
- CatalogProduct
- CatalogSyncAction
- CatalogSyncAddAction
- CatalogSyncAddPayload
- CatalogSyncPatchAction
- CatalogSyncPatchManyAction
- CatalogSyncPatchManyPayload
- CatalogSyncPatchPayload
- CatalogSyncRemoveAction
- CatalogSyncRemoveManyAction
- CatalogSyncRemoveManyPayload
- CatalogSyncRemovePayload
- CatalogSyncRequest
- CatalogSyncResponse
- CatalogSyncResponseData
- CreateAttributeManagementAPIRequest
- CouponCustomerRedemptionLimit
- CouponIntegrationAPIResponse
- CouponLimitPeriod
- CouponResponse
- CreateCouponRequest
- CreateCouponResponse
- CreateStoreRequest
- CustomerInventoryResponse
- CustomerProfile
- ErrorResponse
- ErrorResponseErrorsInner
- GetCampaignResponse
- GetCampaignResponseData
- IntegrationAPICustomerResponse
- IntegrationAPICustomerUpsertBody
- IntegrationAPIEventResponse
- IntegrationAPIEventTrackBody
- IntegrationAPIEventTrackResponse
- IntegrationAPIGetSessionResponse
- IntegrationAPISessionResponse
- IntegrationAPISessionUpdateBody
- IntegrationAPISessionUpdateResponse
- IntegrationAPITriggeredEffect
- InventoryCouponResponse
- ListCampaignsResponse
- ListCouponsResponse
- ListStoresResponse
- ReserveCouponRequest
- RuleEngineTriggeredCampaign
- RuleFailureReason
- SessionAdditionalCost
- SessionCartItem
- SessionCartItemProduct
- SessionUpdateData
- StoreResponse
- UpdateCampaignRequest
- UpdateCouponRequest
- UpdateCouponResponse
- UpdateStoreRequest

### Authentication

All API endpoints are protected by API key authentication, passed via the `X-API-Key` header.

| Security Scheme | Type | Header |
| --------------- | ---- | ------ |
| **integration_api_key** | API Key | X-API-Key |
| **management_api_key** | API Key | X-API-Key |

Configure authentication using the `ApiClient` singleton:

```typescript
import { ApiClient } from "bluemonk-sdk";

const defaultClient = ApiClient.instance;

// For Integration API endpoints
defaultClient.authentications["integration_api_key"].apiKey = "your-integration-key";

// For Management API endpoints
defaultClient.authentications["management_api_key"].apiKey = "your-management-key";
```
