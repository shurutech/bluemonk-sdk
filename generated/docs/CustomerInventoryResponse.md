
# CustomerInventoryResponse

Customer inventory containing their profile and/or coupons. Fields are only included when requested via the `profile` and `coupons` query parameters. 

## Properties

Name | Type
------------ | -------------
`profile` | [IntegrationAPICustomerResponse](IntegrationAPICustomerResponse.md)
`coupons` | [Array&lt;InventoryCouponResponse&gt;](InventoryCouponResponse.md)

## Example

```typescript
import type { CustomerInventoryResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "profile": null,
  "coupons": null,
} satisfies CustomerInventoryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerInventoryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


