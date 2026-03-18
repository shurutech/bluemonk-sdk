
# CouponIntegrationAPIResponse

Coupon details returned by integration API

## Properties

Name | Type
------------ | -------------
`id` | number
`campaignId` | number
`value` | string
`startTime` | Date
`endTime` | Date
`usageCounter` | number
`usageLimit` | number
`recipientIntegrationId` | string
`limits` | [Array&lt;CouponCustomerRedemptionLimit&gt;](CouponCustomerRedemptionLimit.md)
`reservation` | boolean
`implicitlyReserved` | boolean
`isReservationMandatory` | boolean
`reservationCounter` | number
`reservationLimit` | number
`attributes` | { [key: string]: any; }
`created` | Date
`updated` | Date

## Example

```typescript
import type { CouponIntegrationAPIResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "campaignId": 5,
  "value": SUMMER2024,
  "startTime": 2024-06-01T00:00:00Z,
  "endTime": 2024-08-31T23:59:59Z,
  "usageCounter": 5,
  "usageLimit": 100,
  "recipientIntegrationId": ,
  "limits": null,
  "reservation": true,
  "implicitlyReserved": false,
  "isReservationMandatory": true,
  "reservationCounter": 2,
  "reservationLimit": 10,
  "attributes": {discount_percent=20, category=electronics},
  "created": 2024-01-15T10:30:00Z,
  "updated": 2024-01-15T10:30:00Z,
} satisfies CouponIntegrationAPIResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponIntegrationAPIResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


