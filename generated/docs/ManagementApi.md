# ManagementApi

All URIs are relative to *https://demo.bluemonk.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applicationWideCouponSearch**](ManagementApi.md#applicationwidecouponsearch) | **POST** /v1/applications/{applicationId}/coupons_search_advanced/no_total | Search coupons application-wide |
| [**createAttribute**](ManagementApi.md#createattribute) | **POST** /v1/applications/{applicationId}/attributes | Create a custom attribute |
| [**createCoupons**](ManagementApi.md#createcoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Create coupons |
| [**createStore**](ManagementApi.md#createstoreoperation) | **POST** /v1/applications/{applicationId}/stores | Create a new store |
| [**deleteStore**](ManagementApi.md#deletestore) | **DELETE** /v1/applications/{applicationId}/stores/{storeId} | Delete a store |
| [**getCampaign**](ManagementApi.md#getcampaign) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get campaign |
| [**getStore**](ManagementApi.md#getstore) | **GET** /v1/applications/{applicationId}/stores/{storeId} | Get store |
| [**listCampaigns**](ManagementApi.md#listcampaigns) | **GET** /v1/applications/{applicationId}/campaigns | List campaigns |
| [**listCoupons**](ManagementApi.md#listcoupons) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List coupons |
| [**listStores**](ManagementApi.md#liststores) | **GET** /v1/applications/{applicationId}/stores | List stores |
| [**updateCampaign**](ManagementApi.md#updatecampaignoperation) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId} | Update a campaign |
| [**updateCoupon**](ManagementApi.md#updatecouponoperation) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Update a coupon |
| [**updateStore**](ManagementApi.md#updatestoreoperation) | **PUT** /v1/applications/{applicationId}/stores/{storeId} | Update a store |



## applicationWideCouponSearch

> ListCouponsResponse applicationWideCouponSearch(applicationId, pageSize, skip, value, recipientIntegrationId, usable, valid)

Search coupons application-wide

Search for coupons across all campaigns within the application.  Supports offset-based pagination using &#x60;skip&#x60; and &#x60;pageSize&#x60; parameters. Results can be filtered by &#x60;value&#x60;, &#x60;recipientIntegrationId&#x60;, &#x60;usable&#x60;, and/or &#x60;valid&#x60;. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { ApplicationWideCouponSearchRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | Number of items to return per page. Defaults to 1000. Maximum allowed value is 1000.  (optional)
    pageSize: 50,
    // number | Number of items to skip before starting to return results (offset) (optional)
    skip: 5,
    // string | Filter coupons by their code value (exact match) (optional)
    value: SUMMER2024,
    // string | Filter coupons by recipient integration ID (for personal coupons) (optional)
    recipientIntegrationId: customer-123,
    // 'true' | 'false' | Filter coupons by their usability status. - `true`: Coupon can still be used (not exhausted) - `false`: Coupon has reached its usage limit  (optional)
    usable: true,
    // 'expired' | 'validNow' | 'validFuture' | Filter coupons by their validity period status. - `expired`: Coupon\'s end time has passed - `validNow`: Coupon is currently valid (within start/end time) - `validFuture`: Coupon\'s start time is in the future  (optional)
    valid: validNow,
  } satisfies ApplicationWideCouponSearchRequest;

  try {
    const data = await api.applicationWideCouponSearch(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **pageSize** | `number` | Number of items to return per page. Defaults to 1000. Maximum allowed value is 1000.  | [Optional] [Defaults to `1000`] |
| **skip** | `number` | Number of items to skip before starting to return results (offset) | [Optional] [Defaults to `0`] |
| **value** | `string` | Filter coupons by their code value (exact match) | [Optional] [Defaults to `undefined`] |
| **recipientIntegrationId** | `string` | Filter coupons by recipient integration ID (for personal coupons) | [Optional] [Defaults to `undefined`] |
| **usable** | `true`, `false` | Filter coupons by their usability status. - &#x60;true&#x60;: Coupon can still be used (not exhausted) - &#x60;false&#x60;: Coupon has reached its usage limit  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **valid** | `expired`, `validNow`, `validFuture` | Filter coupons by their validity period status. - &#x60;expired&#x60;: Coupon\&#39;s end time has passed - &#x60;validNow&#x60;: Coupon is currently valid (within start/end time) - &#x60;validFuture&#x60;: Coupon\&#39;s start time is in the future  | [Optional] [Defaults to `undefined`] [Enum: expired, validNow, validFuture] |

### Return type

[**ListCouponsResponse**](ListCouponsResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of coupons retrieved successfully |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Not Found - Application does not exist or is not accessible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAttribute

> AttributeManagementAPIResponse createAttribute(applicationId, createAttributeManagementAPIRequest)

Create a custom attribute

Creates a new custom attribute definition for the specified entity type.  When &#x60;subscribedApplicationsIds&#x60; is empty or omitted, the attribute is created as global (available to all applications). Otherwise, it is scoped to the listed applications.  For &#x60;event&#x60; entity attributes, the &#x60;eventType&#x60; field is required and links the attribute to a specific event type. For all other entities, &#x60;eventType&#x60; must not be provided. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { CreateAttributeRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // CreateAttributeManagementAPIRequest
    createAttributeManagementAPIRequest: {"entity":"customer","type":"string","name":"loyaltyTier","title":"Loyalty Tier","description":"Customer loyalty program tier level"},
  } satisfies CreateAttributeRequest;

  try {
    const data = await api.createAttribute(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **createAttributeManagementAPIRequest** | [CreateAttributeManagementAPIRequest](CreateAttributeManagementAPIRequest.md) |  | |

### Return type

[**AttributeManagementAPIResponse**](AttributeManagementAPIResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Attribute created successfully |  -  |
| **400** | Bad Request - Validation error or invalid input |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Not Found - Application does not exist or is not accessible |  -  |
| **409** | An attribute with the same name and entity already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCoupons

> CreateCouponResponse createCoupons(applicationId, campaignId, createCouponRequest, silent)

Create coupons

Creates new coupons within the specified campaign.  By default (&#x60;silent&#x3D;yes&#x60;), the API returns 204 No Content without the created coupon data. Set &#x60;silent&#x3D;no&#x60; to receive the created coupon data in the response. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { CreateCouponsRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | The unique identifier of the campaign
    campaignId: 1,
    // CreateCouponRequest
    createCouponRequest: {"numberOfCoupons":1,"value":"SUMMER2024","usageLimit":100,"startTime":"2024-06-01T00:00:00Z","endTime":"2024-08-31T23:59:59Z","attributes":{"discount_percent":20}},
    // 'yes' | When set to `yes`, the API returns 204 No Content without response body. When omitted or set to any other value, the API returns 200 OK with the response body.  (optional)
    silent: yes,
  } satisfies CreateCouponsRequest;

  try {
    const data = await api.createCoupons(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **campaignId** | `number` | The unique identifier of the campaign | [Defaults to `undefined`] |
| **createCouponRequest** | [CreateCouponRequest](CreateCouponRequest.md) |  | |
| **silent** | `yes` | When set to &#x60;yes&#x60;, the API returns 204 No Content without response body. When omitted or set to any other value, the API returns 200 OK with the response body.  | [Optional] [Defaults to `undefined`] [Enum: yes] |

### Return type

[**CreateCouponResponse**](CreateCouponResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Coupon created successfully (when silent&#x3D;no) |  -  |
| **204** | Coupon created successfully (when silent&#x3D;yes, default) |  -  |
| **400** | Bad Request - Validation error or invalid input |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Campaign not found |  -  |
| **409** | Coupon with the same code already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStore

> StoreResponse createStore(applicationId, createStoreRequest)

Create a new store

Creates a new store within the specified application.  The &#x60;integrationId&#x60; must be unique within the application. If a store with the same &#x60;integrationId&#x60; already exists, a 409 Conflict error is returned. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { CreateStoreOperationRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // CreateStoreRequest
    createStoreRequest: {"name":"Downtown Store","integrationId":"store-downtown-001","description":"Main downtown location","attributes":{"region":"north","type":"flagship"}},
  } satisfies CreateStoreOperationRequest;

  try {
    const data = await api.createStore(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **createStoreRequest** | [CreateStoreRequest](CreateStoreRequest.md) |  | |

### Return type

[**StoreResponse**](StoreResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Store created successfully |  -  |
| **400** | Bad Request - Validation error or invalid input |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Not Found - Application does not exist or is not accessible |  -  |
| **409** | Conflict - Store with the same integrationId already exists for this application |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteStore

> deleteStore(applicationId, storeId)

Delete a store

Deletes a store by its ID.  This operation is irreversible. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { DeleteStoreRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | The ID of the store
    storeId: 1,
  } satisfies DeleteStoreRequest;

  try {
    const data = await api.deleteStore(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **storeId** | `number` | The ID of the store | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Store deleted successfully |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Not Found - Store does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaign

> GetCampaignResponse getCampaign(applicationId, campaignId)

Get campaign

Retrieves a single campaign by its ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { GetCampaignRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | The unique identifier of the campaign
    campaignId: 1,
  } satisfies GetCampaignRequest;

  try {
    const data = await api.getCampaign(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **campaignId** | `number` | The unique identifier of the campaign | [Defaults to `undefined`] |

### Return type

[**GetCampaignResponse**](GetCampaignResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign retrieved successfully |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Campaign not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStore

> StoreResponse getStore(applicationId, storeId)

Get store

Retrieves a single store by its ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { GetStoreRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | The ID of the store
    storeId: 1,
  } satisfies GetStoreRequest;

  try {
    const data = await api.getStore(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **storeId** | `number` | The ID of the store | [Defaults to `undefined`] |

### Return type

[**StoreResponse**](StoreResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Store retrieved successfully |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Not Found - Store does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCampaigns

> ListCampaignsResponse listCampaigns(applicationId, pageSize, skip, name, campaignState)

List campaigns

List all campaigns for a specific Application.  Supports offset-based pagination using &#x60;skip&#x60; and &#x60;pageSize&#x60; parameters. Results can be filtered by &#x60;name&#x60; and/or &#x60;campaignState&#x60;. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { ListCampaignsRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | Number of items to return per page. Defaults to 1000. Maximum allowed value is 1000.  (optional)
    pageSize: 50,
    // number | Number of items to skip before starting to return results (offset) (optional)
    skip: 5,
    // string | Filter campaigns by name (partial match) (optional)
    name: Summer Sale,
    // 'scheduled' | 'running' | 'expired' | 'disabled' | Filter campaigns by their computed state (optional)
    campaignState: running,
  } satisfies ListCampaignsRequest;

  try {
    const data = await api.listCampaigns(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **pageSize** | `number` | Number of items to return per page. Defaults to 1000. Maximum allowed value is 1000.  | [Optional] [Defaults to `1000`] |
| **skip** | `number` | Number of items to skip before starting to return results (offset) | [Optional] [Defaults to `0`] |
| **name** | `string` | Filter campaigns by name (partial match) | [Optional] [Defaults to `undefined`] |
| **campaignState** | `scheduled`, `running`, `expired`, `disabled` | Filter campaigns by their computed state | [Optional] [Defaults to `undefined`] [Enum: scheduled, running, expired, disabled] |

### Return type

[**ListCampaignsResponse**](ListCampaignsResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of campaigns retrieved successfully |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Not Found - Application does not exist or is not accessible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCoupons

> ListCouponsResponse listCoupons(applicationId, campaignId, pageSize, skip, value, recipientIntegrationId, usable, valid)

List coupons

List all coupons for a specific campaign.  Supports offset-based pagination using &#x60;skip&#x60; and &#x60;pageSize&#x60; parameters. Results can be filtered by &#x60;value&#x60;, &#x60;recipientIntegrationId&#x60;, &#x60;usable&#x60;, and/or &#x60;valid&#x60;. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { ListCouponsRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | The unique identifier of the campaign
    campaignId: 1,
    // number | Number of items to return per page. Defaults to 1000. Maximum allowed value is 1000.  (optional)
    pageSize: 50,
    // number | Number of items to skip before starting to return results (offset) (optional)
    skip: 5,
    // string | Filter coupons by their code value (exact match) (optional)
    value: SUMMER2024,
    // string | Filter coupons by recipient integration ID (for personal coupons) (optional)
    recipientIntegrationId: customer-123,
    // 'true' | 'false' | Filter coupons by their usability status. - `true`: Coupon can still be used (not exhausted) - `false`: Coupon has reached its usage limit  (optional)
    usable: true,
    // 'expired' | 'validNow' | 'validFuture' | Filter coupons by their validity period status. - `expired`: Coupon\'s end time has passed - `validNow`: Coupon is currently valid (within start/end time) - `validFuture`: Coupon\'s start time is in the future  (optional)
    valid: validNow,
  } satisfies ListCouponsRequest;

  try {
    const data = await api.listCoupons(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **campaignId** | `number` | The unique identifier of the campaign | [Defaults to `undefined`] |
| **pageSize** | `number` | Number of items to return per page. Defaults to 1000. Maximum allowed value is 1000.  | [Optional] [Defaults to `1000`] |
| **skip** | `number` | Number of items to skip before starting to return results (offset) | [Optional] [Defaults to `0`] |
| **value** | `string` | Filter coupons by their code value (exact match) | [Optional] [Defaults to `undefined`] |
| **recipientIntegrationId** | `string` | Filter coupons by recipient integration ID (for personal coupons) | [Optional] [Defaults to `undefined`] |
| **usable** | `true`, `false` | Filter coupons by their usability status. - &#x60;true&#x60;: Coupon can still be used (not exhausted) - &#x60;false&#x60;: Coupon has reached its usage limit  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **valid** | `expired`, `validNow`, `validFuture` | Filter coupons by their validity period status. - &#x60;expired&#x60;: Coupon\&#39;s end time has passed - &#x60;validNow&#x60;: Coupon is currently valid (within start/end time) - &#x60;validFuture&#x60;: Coupon\&#39;s start time is in the future  | [Optional] [Defaults to `undefined`] [Enum: expired, validNow, validFuture] |

### Return type

[**ListCouponsResponse**](ListCouponsResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of coupons retrieved successfully |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Campaign not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStores

> ListStoresResponse listStores(applicationId, pageSize, skip, withTotalResultSize, name, integrationId)

List stores

List all stores for a specific Application  Supports offset-based pagination using &#x60;skip&#x60; and &#x60;pageSize&#x60; parameters. Optionally returns the total count of matching stores when &#x60;withTotalResultSize&#x3D;true&#x60;.  Results can be filtered by &#x60;name&#x60; and/or &#x60;integrationId&#x60;. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { ListStoresRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | Number of items to return per page. Defaults to 1000. Maximum allowed value is 1000.  (optional)
    pageSize: 50,
    // number | Number of items to skip before starting to return results (offset) (optional)
    skip: 5,
    // 'true' | 'false' | When set to \"true\", includes the total count of matching items in the response metadata. This may impact performance for large datasets.  (optional)
    withTotalResultSize: true,
    // string | Name of the store (optional)
    name: Downtown Store,
    // string | IntegrationID of the store (optional)
    integrationId: store-downtown-001,
  } satisfies ListStoresRequest;

  try {
    const data = await api.listStores(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **pageSize** | `number` | Number of items to return per page. Defaults to 1000. Maximum allowed value is 1000.  | [Optional] [Defaults to `1000`] |
| **skip** | `number` | Number of items to skip before starting to return results (offset) | [Optional] [Defaults to `0`] |
| **withTotalResultSize** | `true`, `false` | When set to \&quot;true\&quot;, includes the total count of matching items in the response metadata. This may impact performance for large datasets.  | [Optional] [Defaults to `&#39;false&#39;`] [Enum: true, false] |
| **name** | `string` | Name of the store | [Optional] [Defaults to `undefined`] |
| **integrationId** | `string` | IntegrationID of the store | [Optional] [Defaults to `undefined`] |

### Return type

[**ListStoresResponse**](ListStoresResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of stores retrieved successfully |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Not Found - Application does not exist or is not accessible |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCampaign

> CampaignResponse updateCampaign(applicationId, campaignId, updateCampaignRequest)

Update a campaign

Updates an existing campaign by its ID.  Only &#x60;name&#x60;, &#x60;description&#x60;, &#x60;state&#x60;, and &#x60;attributes&#x60; can be updated. The campaign\&#39;s schedule (&#x60;startTime&#x60;/&#x60;endTime&#x60;) cannot be modified via this endpoint. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { UpdateCampaignOperationRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | The unique identifier of the campaign
    campaignId: 1,
    // UpdateCampaignRequest
    updateCampaignRequest: {"name":"Summer Sale 2024 - Extended","description":"Extended summer promotion with additional discounts","state":"enabled","attributes":{"category":"seasonal","extended":true}},
  } satisfies UpdateCampaignOperationRequest;

  try {
    const data = await api.updateCampaign(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **campaignId** | `number` | The unique identifier of the campaign | [Defaults to `undefined`] |
| **updateCampaignRequest** | [UpdateCampaignRequest](UpdateCampaignRequest.md) |  | |

### Return type

[**CampaignResponse**](CampaignResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Campaign updated successfully |  -  |
| **400** | Bad Request - Validation error or invalid input |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Campaign not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCoupon

> UpdateCouponResponse updateCoupon(applicationId, campaignId, couponId, updateCouponRequest)

Update a coupon

Updates an existing coupon by its ID.  All fields are optional. Only provided fields will be updated. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { UpdateCouponOperationRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | The unique identifier of the campaign
    campaignId: 1,
    // number | The unique identifier of the coupon
    couponId: 1,
    // UpdateCouponRequest
    updateCouponRequest: {"usageLimit":200,"endTime":"2024-09-30T23:59:59Z","attributes":{"discount_percent":25,"extended":true}},
  } satisfies UpdateCouponOperationRequest;

  try {
    const data = await api.updateCoupon(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **campaignId** | `number` | The unique identifier of the campaign | [Defaults to `undefined`] |
| **couponId** | `number` | The unique identifier of the coupon | [Defaults to `undefined`] |
| **updateCouponRequest** | [UpdateCouponRequest](UpdateCouponRequest.md) |  | |

### Return type

[**UpdateCouponResponse**](UpdateCouponResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Coupon updated successfully |  -  |
| **400** | Bad Request - Validation error or invalid input |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Coupon not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStore

> StoreResponse updateStore(applicationId, storeId, updateStoreRequest)

Update a store

Updates an existing store by its ID. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'bluemonk-sdk';
import type { UpdateStoreOperationRequest } from 'bluemonk-sdk';

async function example() {
  console.log("🚀 Testing bluemonk-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_api_key
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the application
    applicationId: 5,
    // number | The ID of the store
    storeId: 1,
    // UpdateStoreRequest
    updateStoreRequest: {"name":"Downtown Store - Renovated","description":"Main downtown location after 2024 renovation","integrationId":"store-downtown-001","attributes":{"region":"north","type":"flagship","renovated":true}},
  } satisfies UpdateStoreOperationRequest;

  try {
    const data = await api.updateStore(body);
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
| **applicationId** | `number` | The ID of the application | [Defaults to `undefined`] |
| **storeId** | `number` | The ID of the store | [Defaults to `undefined`] |
| **updateStoreRequest** | [UpdateStoreRequest](UpdateStoreRequest.md) |  | |

### Return type

[**StoreResponse**](StoreResponse.md)

### Authorization

[management_api_key](../README.md#management_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Store updated successfully |  -  |
| **400** | Bad Request - Validation error or invalid input |  -  |
| **401** | Unauthorized - Missing or invalid API key |  -  |
| **404** | Not Found - Store does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

