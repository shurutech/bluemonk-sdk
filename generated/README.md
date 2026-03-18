# bluemonk-sdk@1.0.0

A TypeScript SDK client for the demo.bluemonk.com API.

## Usage

First, install the SDK from npm.

```bash
npm install bluemonk-sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  IntegrationApi,
} from 'bluemonk-sdk';
import type { BulkUpsertCustomersOperationRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: integration_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // BulkUpsertCustomersRequest
    bulkUpsertCustomersRequest: {"customerProfiles":[{"integrationId":"cust-001","attributes":{"tier":"gold","points":500,"isVip":true}}]},
    // 'yes' | When set to `yes`, the API returns 204 No Content without response body. When omitted or set to any other value, the API returns 200 OK with the response body.  (optional)
    silent: yes,
  } satisfies BulkUpsertCustomersOperationRequest;

  try {
    const data = await api.bulkUpsertCustomers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://demo.bluemonk.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*IntegrationApi* | [**bulkUpsertCustomers**](docs/IntegrationApi.md#bulkupsertcustomersoperation) | **PUT** /v1/customers | Bulk upsert customers
*IntegrationApi* | [**cancelCouponReservationsForCustomers**](docs/IntegrationApi.md#cancelcouponreservationsforcustomers) | **DELETE** /v1/coupon_reservations/{couponValue} | Cancel coupon reservations for customers
*IntegrationApi* | [**getCustomerInventory**](docs/IntegrationApi.md#getcustomerinventory) | **GET** /v1/customers/{integrationId}/inventory | Get customer inventory
*IntegrationApi* | [**getSession**](docs/IntegrationApi.md#getsession) | **GET** /v1/sessions/{integrationId} | Get session by integration ID
*IntegrationApi* | [**reserveCouponForCustomers**](docs/IntegrationApi.md#reservecouponforcustomers) | **POST** /v1/coupon_reservations/{couponValue} | Reserve coupon for customers
*IntegrationApi* | [**syncCatalogItems**](docs/IntegrationApi.md#synccatalogitems) | **PUT** /v1/catalogs/{catalogId}/sync | Sync catalog items
*IntegrationApi* | [**trackEvent**](docs/IntegrationApi.md#trackevent) | **POST** /v1/events | Track an event
*IntegrationApi* | [**upsertCustomer**](docs/IntegrationApi.md#upsertcustomer) | **PUT** /v1/customers/{integrationId} | Upsert a single customer
*IntegrationApi* | [**upsertSession**](docs/IntegrationApi.md#upsertsession) | **PUT** /v1/sessions/{integrationId} | Create or update a session
*ManagementApi* | [**applicationWideCouponSearch**](docs/ManagementApi.md#applicationwidecouponsearch) | **POST** /v1/applications/{applicationId}/coupons_search_advanced/no_total | Search coupons application-wide
*ManagementApi* | [**createCoupons**](docs/ManagementApi.md#createcoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Create coupons
*ManagementApi* | [**createStore**](docs/ManagementApi.md#createstoreoperation) | **POST** /v1/applications/{applicationId}/stores | Create a new store
*ManagementApi* | [**deleteStore**](docs/ManagementApi.md#deletestore) | **DELETE** /v1/applications/{applicationId}/stores/{storeId} | Delete a store
*ManagementApi* | [**getCampaign**](docs/ManagementApi.md#getcampaign) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get campaign
*ManagementApi* | [**getStore**](docs/ManagementApi.md#getstore) | **GET** /v1/applications/{applicationId}/stores/{storeId} | Get store
*ManagementApi* | [**listCampaigns**](docs/ManagementApi.md#listcampaigns) | **GET** /v1/applications/{applicationId}/campaigns | List campaigns
*ManagementApi* | [**listCoupons**](docs/ManagementApi.md#listcoupons) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List coupons
*ManagementApi* | [**listStores**](docs/ManagementApi.md#liststores) | **GET** /v1/applications/{applicationId}/stores | List stores
*ManagementApi* | [**updateCampaign**](docs/ManagementApi.md#updatecampaignoperation) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId} | Update a campaign
*ManagementApi* | [**updateCoupon**](docs/ManagementApi.md#updatecouponoperation) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Update a coupon
*ManagementApi* | [**updateStore**](docs/ManagementApi.md#updatestoreoperation) | **PUT** /v1/applications/{applicationId}/stores/{storeId} | Update a store


### Models

- [BulkUpsertCustomersRequest](docs/BulkUpsertCustomersRequest.md)
- [BulkUpsertCustomersResponse](docs/BulkUpsertCustomersResponse.md)
- [CampaignResponse](docs/CampaignResponse.md)
- [CampaignState](docs/CampaignState.md)
- [CampaignStatus](docs/CampaignStatus.md)
- [CancelCouponReservationsRequest](docs/CancelCouponReservationsRequest.md)
- [CatalogItemsFilter](docs/CatalogItemsFilter.md)
- [CatalogProduct](docs/CatalogProduct.md)
- [CatalogSyncAction](docs/CatalogSyncAction.md)
- [CatalogSyncAddAction](docs/CatalogSyncAddAction.md)
- [CatalogSyncAddPayload](docs/CatalogSyncAddPayload.md)
- [CatalogSyncPatchAction](docs/CatalogSyncPatchAction.md)
- [CatalogSyncPatchManyAction](docs/CatalogSyncPatchManyAction.md)
- [CatalogSyncPatchManyPayload](docs/CatalogSyncPatchManyPayload.md)
- [CatalogSyncPatchPayload](docs/CatalogSyncPatchPayload.md)
- [CatalogSyncRemoveAction](docs/CatalogSyncRemoveAction.md)
- [CatalogSyncRemoveManyAction](docs/CatalogSyncRemoveManyAction.md)
- [CatalogSyncRemoveManyPayload](docs/CatalogSyncRemoveManyPayload.md)
- [CatalogSyncRemovePayload](docs/CatalogSyncRemovePayload.md)
- [CatalogSyncRequest](docs/CatalogSyncRequest.md)
- [CatalogSyncResponse](docs/CatalogSyncResponse.md)
- [CatalogSyncResponseData](docs/CatalogSyncResponseData.md)
- [CouponCustomerRedemptionLimit](docs/CouponCustomerRedemptionLimit.md)
- [CouponIntegrationAPIResponse](docs/CouponIntegrationAPIResponse.md)
- [CouponLimitPeriod](docs/CouponLimitPeriod.md)
- [CouponResponse](docs/CouponResponse.md)
- [CreateCouponRequest](docs/CreateCouponRequest.md)
- [CreateCouponResponse](docs/CreateCouponResponse.md)
- [CreateStoreRequest](docs/CreateStoreRequest.md)
- [CustomerInventoryResponse](docs/CustomerInventoryResponse.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [ErrorResponseErrorsInner](docs/ErrorResponseErrorsInner.md)
- [GetCampaignResponse](docs/GetCampaignResponse.md)
- [GetCampaignResponseData](docs/GetCampaignResponseData.md)
- [IntegrationAPICustomerResponse](docs/IntegrationAPICustomerResponse.md)
- [IntegrationAPICustomerUpsertBody](docs/IntegrationAPICustomerUpsertBody.md)
- [IntegrationAPIEventResponse](docs/IntegrationAPIEventResponse.md)
- [IntegrationAPIEventTrackBody](docs/IntegrationAPIEventTrackBody.md)
- [IntegrationAPIEventTrackResponse](docs/IntegrationAPIEventTrackResponse.md)
- [IntegrationAPIGetSessionResponse](docs/IntegrationAPIGetSessionResponse.md)
- [IntegrationAPISessionResponse](docs/IntegrationAPISessionResponse.md)
- [IntegrationAPISessionUpdateBody](docs/IntegrationAPISessionUpdateBody.md)
- [IntegrationAPISessionUpdateResponse](docs/IntegrationAPISessionUpdateResponse.md)
- [IntegrationAPITriggeredEffect](docs/IntegrationAPITriggeredEffect.md)
- [InventoryCouponResponse](docs/InventoryCouponResponse.md)
- [ListCampaignsResponse](docs/ListCampaignsResponse.md)
- [ListCouponsResponse](docs/ListCouponsResponse.md)
- [ListStoresResponse](docs/ListStoresResponse.md)
- [ReserveCouponRequest](docs/ReserveCouponRequest.md)
- [RuleEngineTriggeredCampaign](docs/RuleEngineTriggeredCampaign.md)
- [RuleFailureReason](docs/RuleFailureReason.md)
- [SessionAdditionalCost](docs/SessionAdditionalCost.md)
- [SessionCartItem](docs/SessionCartItem.md)
- [SessionCartItemProduct](docs/SessionCartItemProduct.md)
- [SessionUpdateData](docs/SessionUpdateData.md)
- [StoreResponse](docs/StoreResponse.md)
- [UpdateCampaignRequest](docs/UpdateCampaignRequest.md)
- [UpdateCouponRequest](docs/UpdateCouponRequest.md)
- [UpdateCouponResponse](docs/UpdateCouponResponse.md)
- [UpdateStoreRequest](docs/UpdateStoreRequest.md)
- [UpsertCustomerRequest](docs/UpsertCustomerRequest.md)

### Authorization


Authentication schemes defined for the API:
<a id="integration_api_key"></a>
#### integration_api_key


- **Type**: API key
- **API key parameter name**: `X-API-Key`
- **Location**: HTTP header
<a id="management_api_key"></a>
#### management_api_key


- **Type**: API key
- **API key parameter name**: `X-API-Key`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.20.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
