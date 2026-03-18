
# UpdateCouponRequest

Request body for updating a coupon. Omitted fields default to zero values (0, false, or null) and will overwrite existing values. Provide full values for fields you want to retain. 

## Properties

Name | Type
------------ | -------------
`usageLimit` | number
`reservationLimit` | number
`isReservationMandatory` | boolean
`implicitlyReserved` | boolean
`startTime` | Date
`endTime` | Date
`recipientIntegrationId` | string
`attributes` | { [key: string]: any; }
`limits` | [Array&lt;CouponCustomerRedemptionLimit&gt;](CouponCustomerRedemptionLimit.md)

## Example

```typescript
import type { UpdateCouponRequest } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "usageLimit": 100,
  "reservationLimit": 10,
  "isReservationMandatory": false,
  "implicitlyReserved": false,
  "startTime": 2024-06-01T00:00:00Z,
  "endTime": 2024-08-31T23:59:59Z,
  "recipientIntegrationId": customer-123,
  "attributes": {discount_percent=25, extended=true},
  "limits": null,
} satisfies UpdateCouponRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCouponRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


