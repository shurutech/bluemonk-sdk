
# CreateCouponResponse

Response when creating coupons with silent=no

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;CouponResponse&gt;](CouponResponse.md)
`totalResultSize` | number

## Example

```typescript
import type { CreateCouponResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "totalResultSize": 1,
} satisfies CreateCouponResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCouponResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


