# IntegrationApi

All URIs are relative to *https://demo.bluemonk.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkUpsertCustomers**](IntegrationApi.md#bulkupsertcustomersoperation) | **PUT** /v1/customers | Bulk upsert customers |
| [**cancelCouponReservationsForCustomers**](IntegrationApi.md#cancelcouponreservationsforcustomers) | **DELETE** /v1/coupon_reservations/{couponValue} | Cancel coupon reservations for customers |
| [**getCustomerInventory**](IntegrationApi.md#getcustomerinventory) | **GET** /v1/customers/{integrationId}/inventory | Get customer inventory |
| [**getSession**](IntegrationApi.md#getsession) | **GET** /v1/sessions/{integrationId} | Get session by integration ID |
| [**reserveCouponForCustomers**](IntegrationApi.md#reservecouponforcustomers) | **POST** /v1/coupon_reservations/{couponValue} | Reserve coupon for customers |
| [**syncCatalogItems**](IntegrationApi.md#synccatalogitems) | **PUT** /v1/catalogs/{catalogId}/sync | Sync catalog items |
| [**trackEvent**](IntegrationApi.md#trackevent) | **POST** /v1/events | Track an event |
| [**upsertCustomer**](IntegrationApi.md#upsertcustomer) | **PUT** /v1/customers/{integrationId} | Upsert a single customer |
| [**upsertSession**](IntegrationApi.md#upsertsession) | **PUT** /v1/sessions/{integrationId} | Create or update a session |



## bulkUpsertCustomers

> BulkUpsertCustomersResponse bulkUpsertCustomers(bulkUpsertCustomersRequest, silent)

Bulk upsert customers

Create or update multiple customer profiles in a single request. This is an upsert operation: - If a customer with the given &#x60;integrationId&#x60; does not exist, it will be created - If a customer with the given &#x60;integrationId&#x60; already exists, it will be updated  ## Attributes  Customer attributes are validated against the attribute definitions configured for the application. Invalid attribute names or type mismatches will result in a 400 error.  ## Silent Mode  Use the &#x60;silent&#x3D;yes&#x60; query parameter to perform the operation without returning the response body. This is useful for fire-and-forget scenarios where you don\&#39;t need the response data.  ## Environment  The customer will be created in the environment (sandbox/live) associated with the API key used. 

### Example

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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bulkUpsertCustomersRequest** | [BulkUpsertCustomersRequest](BulkUpsertCustomersRequest.md) |  | |
| **silent** | `yes` | When set to &#x60;yes&#x60;, the API returns 204 No Content without response body. When omitted or set to any other value, the API returns 200 OK with the response body.  | [Optional] [Defaults to `undefined`] [Enum: yes] |

### Return type

[**BulkUpsertCustomersResponse**](BulkUpsertCustomersResponse.md)

### Authorization

[integration_api_key](../README.md#integration_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Customers created/updated successfully |  -  |
| **204** | Customers created/updated successfully (silent mode) |  -  |
| **400** | Bad Request - Validation error or invalid attributes |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelCouponReservationsForCustomers

> cancelCouponReservationsForCustomers(couponValue, cancelCouponReservationsRequest)

Cancel coupon reservations for customers

Cancel existing coupon reservations for one or more customers. This releases the reservation and decrements the reservation counter.  ## Universal vs Personal Coupons  - **Universal Coupons**: Reservations can be cancelled for any customers with active reservations. - **Personal Coupons**: Cannot cancel reservations - will return a 400 error.  ## Idempotency  Cancelling a non-existent reservation is handled gracefully and returns 204 No Content. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'bluemonk-sdk';
import type { CancelCouponReservationsForCustomersRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: integration_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The coupon code value
    couponValue: SUMMER2024,
    // CancelCouponReservationsRequest
    cancelCouponReservationsRequest: {"integrationIds":["cust-001"]},
  } satisfies CancelCouponReservationsForCustomersRequest;

  try {
    const data = await api.cancelCouponReservationsForCustomers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **couponValue** | `string` | The coupon code value | [Defaults to `undefined`] |
| **cancelCouponReservationsRequest** | [CancelCouponReservationsRequest](CancelCouponReservationsRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[integration_api_key](../README.md#integration_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content - Operation completed successfully |  -  |
| **400** | Bad Request - Validation error or invalid operation |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Coupon not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerInventory

> CustomerInventoryResponse getCustomerInventory(integrationId, profile, coupons)

Get customer inventory

Retrieve a customer\&#39;s inventory by their integration ID.  Use the &#x60;profile&#x60; and &#x60;coupons&#x60; query parameters to control which sections are included in the response. By default, neither is included — you must explicitly opt in.  ## Coupons  When &#x60;coupons&#x3D;true&#x60;, returns all coupons associated with the customer, including personal coupons and reserved universal coupons. Each coupon includes the customer\&#39;s redemption counts for the current period. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'bluemonk-sdk';
import type { GetCustomerInventoryRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: integration_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The integration ID for the customer or session
    integrationId: cust-001,
    // boolean | Include the customer profile in the response (optional)
    profile: true,
    // boolean | Include the customer\'s coupons in the response (optional)
    coupons: true,
  } satisfies GetCustomerInventoryRequest;

  try {
    const data = await api.getCustomerInventory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationId** | `string` | The integration ID for the customer or session | [Defaults to `undefined`] |
| **profile** | `boolean` | Include the customer profile in the response | [Optional] [Defaults to `false`] |
| **coupons** | `boolean` | Include the customer\&#39;s coupons in the response | [Optional] [Defaults to `false`] |

### Return type

[**CustomerInventoryResponse**](CustomerInventoryResponse.md)

### Authorization

[integration_api_key](../README.md#integration_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Customer inventory retrieved successfully |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Customer not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSession

> IntegrationAPIGetSessionResponse getSession(integrationId)

Get session by integration ID

Retrieve a customer session by its integration ID.  Returns the session data along with any effects that were previously triggered during session evaluation. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'bluemonk-sdk';
import type { GetSessionRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: integration_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The integration ID for the customer or session
    integrationId: cust-001,
  } satisfies GetSessionRequest;

  try {
    const data = await api.getSession(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationId** | `string` | The integration ID for the customer or session | [Defaults to `undefined`] |

### Return type

[**IntegrationAPIGetSessionResponse**](IntegrationAPIGetSessionResponse.md)

### Authorization

[integration_api_key](../README.md#integration_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session retrieved successfully |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reserveCouponForCustomers

> CouponIntegrationAPIResponse reserveCouponForCustomers(couponValue, reserveCouponRequest)

Reserve coupon for customers

Reserve a coupon for one or more customers. This creates a reservation that holds the coupon for the specified customers until they redeem it or the reservation is cancelled.  ## Universal vs Personal Coupons  - **Universal Coupons**: Can be reserved for multiple customers. The &#x60;reservation&#x60; field in the response will be &#x60;true&#x60;. - **Personal Coupons**: Can only be reserved for the designated recipient. Attempting to reserve   for other customers will return a 400 error.  ## Idempotency  Reserving the same coupon for the same customer multiple times is idempotent - the reservation counter will not increase if the customer already has an active reservation. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'bluemonk-sdk';
import type { ReserveCouponForCustomersRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: integration_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The coupon code value
    couponValue: SUMMER2024,
    // ReserveCouponRequest
    reserveCouponRequest: {"integrationIds":["cust-001"]},
  } satisfies ReserveCouponForCustomersRequest;

  try {
    const data = await api.reserveCouponForCustomers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **couponValue** | `string` | The coupon code value | [Defaults to `undefined`] |
| **reserveCouponRequest** | [ReserveCouponRequest](ReserveCouponRequest.md) |  | |

### Return type

[**CouponIntegrationAPIResponse**](CouponIntegrationAPIResponse.md)

### Authorization

[integration_api_key](../README.md#integration_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Coupon reserved successfully |  -  |
| **400** | Bad Request - Validation error or invalid operation |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Coupon not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncCatalogItems

> CatalogSyncResponse syncCatalogItems(catalogId, catalogSyncRequest)

Sync catalog items

Synchronize items in a catalog by performing bulk add, update, or remove operations.  ## Action Types  - **ADD**: Add new items to the catalog. Use &#x60;replaceIfExists: true&#x60; to overwrite existing items. - **PATCH**: Update existing items. Use &#x60;createIfNotExists: true&#x60; to create items that don\&#39;t exist. - **REMOVE**: Remove specific items by SKU. - **PATCH_MANY**: Update multiple items matching filter criteria. - **REMOVE_MANY**: Remove multiple items matching filter criteria.  ## Constraints  - All actions in a single request must be of the same type - Maximum 1000 actions per request for ADD, PATCH, REMOVE - Maximum 1 action per request for PATCH_MANY, REMOVE_MANY - No duplicate SKUs within a single request  ## Filter Operators (for PATCH_MANY and REMOVE_MANY)  - &#x60;EQ&#x60;: Equals - &#x60;GT&#x60;: Greater than - &#x60;GE&#x60;: Greater than or equal - &#x60;LT&#x60;: Less than - &#x60;LE&#x60;: Less than or equal - &#x60;IN&#x60;: Value is in list 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'bluemonk-sdk';
import type { SyncCatalogItemsRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: integration_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Unique identifier of the catalog
    catalogId: 42,
    // CatalogSyncRequest
    catalogSyncRequest: {"actions":[{"type":"ADD","payload":{"sku":"PROD-001","price":99.99,"product":{"name":"Premium Widget"},"attributes":{"color":"blue","size":"L"}}}]},
  } satisfies SyncCatalogItemsRequest;

  try {
    const data = await api.syncCatalogItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **catalogId** | `number` | Unique identifier of the catalog | [Defaults to `undefined`] |
| **catalogSyncRequest** | [CatalogSyncRequest](CatalogSyncRequest.md) |  | |

### Return type

[**CatalogSyncResponse**](CatalogSyncResponse.md)

### Authorization

[integration_api_key](../README.md#integration_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Catalog items synced successfully |  -  |
| **400** | Bad Request - Validation error or invalid input |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **403** | Forbidden - Application not connected to specified catalog |  -  |
| **404** | Catalog not found or application not connected to this catalog |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## trackEvent

> IntegrationAPIEventTrackResponse trackEvent(integrationAPIEventTrackBody, silent, dry, now)

Track an event

Track a custom event for a customer. Events are always evaluated by the rule engine.  ## Silent Mode  Use &#x60;silent&#x3D;yes&#x60; to receive a 204 No Content response instead of the full rule engine evaluation results.  ## Dry Run  Set &#x60;dry&#x3D;true&#x60; to evaluate rules without persisting any side effects. Combine with &#x60;now&#x60; to test time-dependent rules. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'bluemonk-sdk';
import type { TrackEventRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: integration_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // IntegrationAPIEventTrackBody
    integrationAPIEventTrackBody: {"type":"pageView","profileId":"cust-001","attributes":{"page":"/products/widget","referrer":"google.com"}},
    // 'yes' | When set to `yes`, the API returns 204 No Content without response body. When omitted or set to any other value, the API returns 200 OK with the response body.  (optional)
    silent: yes,
    // boolean | Dry run mode - evaluate rules without persisting side effects. For the customer upsert endpoint, requires `runRuleEngine=true`.  (optional)
    dry: true,
    // Date | RFC 3339 timestamp to use as the evaluation time. Requires `dry=true`. Useful for testing time-dependent rules.  (optional)
    now: 2024-06-15T14:30:00Z,
  } satisfies TrackEventRequest;

  try {
    const data = await api.trackEvent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationAPIEventTrackBody** | [IntegrationAPIEventTrackBody](IntegrationAPIEventTrackBody.md) |  | |
| **silent** | `yes` | When set to &#x60;yes&#x60;, the API returns 204 No Content without response body. When omitted or set to any other value, the API returns 200 OK with the response body.  | [Optional] [Defaults to `undefined`] [Enum: yes] |
| **dry** | `boolean` | Dry run mode - evaluate rules without persisting side effects. For the customer upsert endpoint, requires &#x60;runRuleEngine&#x3D;true&#x60;.  | [Optional] [Defaults to `false`] |
| **now** | `Date` | RFC 3339 timestamp to use as the evaluation time. Requires &#x60;dry&#x3D;true&#x60;. Useful for testing time-dependent rules.  | [Optional] [Defaults to `undefined`] |

### Return type

[**IntegrationAPIEventTrackResponse**](IntegrationAPIEventTrackResponse.md)

### Authorization

[integration_api_key](../README.md#integration_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Event tracked with rule engine evaluation results |  -  |
| **204** | Event tracked successfully (silent mode) |  -  |
| **400** | Bad Request - Validation error |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertCustomer

> IntegrationAPIEventTrackResponse upsertCustomer(integrationId, integrationAPICustomerUpsertBody, runRuleEngine, dry, now)

Upsert a single customer

Create or update a single customer profile by integration ID.  ## Rule Engine  Set &#x60;runRuleEngine&#x3D;true&#x60; to evaluate campaign rules against the customer profile after upserting. The response will include triggered effects, campaigns, and any created coupons.  ## Dry Run  Set &#x60;dry&#x3D;true&#x60; (requires &#x60;runRuleEngine&#x3D;true&#x60;) to evaluate rules without persisting any side effects. Combine with &#x60;now&#x60; to test time-dependent rules.  ## Attributes  Customer attributes are validated against the attribute definitions configured for the application. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'bluemonk-sdk';
import type { UpsertCustomerRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: integration_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The integration ID for the customer or session
    integrationId: cust-001,
    // IntegrationAPICustomerUpsertBody
    integrationAPICustomerUpsertBody: {"attributes":{"tier":"gold","points":1500}},
    // boolean | Enable rule engine evaluation (default false) (optional)
    runRuleEngine: true,
    // boolean | Dry run mode - evaluate rules without persisting side effects. For the customer upsert endpoint, requires `runRuleEngine=true`.  (optional)
    dry: true,
    // Date | RFC 3339 timestamp to use as the evaluation time. Requires `dry=true`. Useful for testing time-dependent rules.  (optional)
    now: 2024-06-15T14:30:00Z,
  } satisfies UpsertCustomerRequest;

  try {
    const data = await api.upsertCustomer(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationId** | `string` | The integration ID for the customer or session | [Defaults to `undefined`] |
| **integrationAPICustomerUpsertBody** | [IntegrationAPICustomerUpsertBody](IntegrationAPICustomerUpsertBody.md) |  | |
| **runRuleEngine** | `boolean` | Enable rule engine evaluation (default false) | [Optional] [Defaults to `false`] |
| **dry** | `boolean` | Dry run mode - evaluate rules without persisting side effects. For the customer upsert endpoint, requires &#x60;runRuleEngine&#x3D;true&#x60;.  | [Optional] [Defaults to `false`] |
| **now** | `Date` | RFC 3339 timestamp to use as the evaluation time. Requires &#x60;dry&#x3D;true&#x60;. Useful for testing time-dependent rules.  | [Optional] [Defaults to `undefined`] |

### Return type

[**IntegrationAPIEventTrackResponse**](IntegrationAPIEventTrackResponse.md)

### Authorization

[integration_api_key](../README.md#integration_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Customer upserted successfully (with optional rule engine results) |  -  |
| **400** | Bad Request - Validation error |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upsertSession

> IntegrationAPISessionUpdateResponse upsertSession(integrationId, integrationAPISessionUpdateBody, dry, now)

Create or update a session

Create or update a customer session by integration ID. Sessions are always evaluated by the rule engine.  ## Session Lifecycle  Sessions progress through states: &#x60;open&#x60; -&gt; &#x60;closed&#x60; or &#x60;cancelled&#x60;. Cart items, coupon codes, and additional costs can be modified while the session is open.  ## Rule Engine  The rule engine evaluates the session on every update. Effects like discounts, free items, coupon acceptance/rejection, and notifications are returned in the response.  ## Dry Run  Set &#x60;dry&#x3D;true&#x60; to evaluate rules without persisting any side effects. Combine with &#x60;now&#x60; to test time-dependent rules. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'bluemonk-sdk';
import type { UpsertSessionRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: integration_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The integration ID for the customer or session
    integrationId: cust-001,
    // IntegrationAPISessionUpdateBody
    integrationAPISessionUpdateBody: {"customerSession":{"profileId":"cust-001","state":"open","storeIntegrationId":"store-downtown-001","cartItems":[{"sku":"PROD-001","quantity":2,"price":49.99,"product":{"name":"Premium Widget"}}],"couponCodes":["SUMMER2024"],"additionalCosts":{"shipping":{"price":5.99}}}},
    // boolean | Dry run mode - evaluate rules without persisting side effects. For the customer upsert endpoint, requires `runRuleEngine=true`.  (optional)
    dry: true,
    // Date | RFC 3339 timestamp to use as the evaluation time. Requires `dry=true`. Useful for testing time-dependent rules.  (optional)
    now: 2024-06-15T14:30:00Z,
  } satisfies UpsertSessionRequest;

  try {
    const data = await api.upsertSession(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationId** | `string` | The integration ID for the customer or session | [Defaults to `undefined`] |
| **integrationAPISessionUpdateBody** | [IntegrationAPISessionUpdateBody](IntegrationAPISessionUpdateBody.md) |  | |
| **dry** | `boolean` | Dry run mode - evaluate rules without persisting side effects. For the customer upsert endpoint, requires &#x60;runRuleEngine&#x3D;true&#x60;.  | [Optional] [Defaults to `false`] |
| **now** | `Date` | RFC 3339 timestamp to use as the evaluation time. Requires &#x60;dry&#x3D;true&#x60;. Useful for testing time-dependent rules.  | [Optional] [Defaults to `undefined`] |

### Return type

[**IntegrationAPISessionUpdateResponse**](IntegrationAPISessionUpdateResponse.md)

### Authorization

[integration_api_key](../README.md#integration_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session created/updated with rule engine evaluation results |  -  |
| **400** | Bad Request - Validation error or invalid input |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

