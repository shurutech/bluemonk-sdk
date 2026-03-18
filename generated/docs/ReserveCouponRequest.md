
# ReserveCouponRequest

Request body for reserving a coupon for customers

## Properties

Name | Type
------------ | -------------
`integrationIds` | Array&lt;string&gt;

## Example

```typescript
import type { ReserveCouponRequest } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "integrationIds": [cust-001, cust-002],
} satisfies ReserveCouponRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReserveCouponRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


