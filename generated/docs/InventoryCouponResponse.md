
# InventoryCouponResponse

Coupon details within a customer\'s inventory

## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`campaignId` | number
`value` | string
`state` | string
`usageLimit` | number
`startDate` | Date
`expiryDate` | Date
`usageCounter` | number
`recipientIntegrationId` | string
`limits` | [Array&lt;CouponCustomerRedemptionLimit&gt;](CouponCustomerRedemptionLimit.md)
`reservation` | boolean
`implicitlyReserved` | boolean
`isReservationMandatory` | boolean
`reservationCounter` | number
`reservationLimit` | number
`attributes` | { [key: string]: any; }
`profileRedemptionCount` | number
`profilePeriodRedemptionCount` | number

## Example

```typescript
import type { InventoryCouponResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "created": null,
  "campaignId": null,
  "value": null,
  "state": null,
  "usageLimit": null,
  "startDate": null,
  "expiryDate": null,
  "usageCounter": null,
  "recipientIntegrationId": null,
  "limits": null,
  "reservation": null,
  "implicitlyReserved": null,
  "isReservationMandatory": null,
  "reservationCounter": null,
  "reservationLimit": null,
  "attributes": null,
  "profileRedemptionCount": null,
  "profilePeriodRedemptionCount": null,
} satisfies InventoryCouponResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InventoryCouponResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


