
# CancelCouponReservationsRequest

Request body for cancelling coupon reservations for customers

## Properties

Name | Type
------------ | -------------
`integrationIds` | Array&lt;string&gt;

## Example

```typescript
import type { CancelCouponReservationsRequest } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "integrationIds": [cust-001, cust-002],
} satisfies CancelCouponReservationsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CancelCouponReservationsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


