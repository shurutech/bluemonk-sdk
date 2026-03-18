
# CreateCouponRequest


## Properties

Name | Type
------------ | -------------
`numberOfCoupons` | number
`uniquePrefix` | string
`value` | string
`couponPattern` | string
`validCharacters` | Array&lt;string&gt;
`usageLimit` | number
`recipientIntegrationId` | string
`limits` | [Array&lt;CouponCustomerRedemptionLimit&gt;](CouponCustomerRedemptionLimit.md)
`startTime` | Date
`endTime` | Date
`implicitlyReserved` | boolean
`isReservationMandatory` | boolean
`reservationLimit` | number
`attributes` | { [key: string]: any; }

## Example

```typescript
import type { CreateCouponRequest } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "numberOfCoupons": 1,
  "uniquePrefix": SUMMER,
  "value": SUMMER2024,
  "couponPattern": XXXX-XXXX,
  "validCharacters": [A, B, C, 1, 2, 3],
  "usageLimit": 100,
  "recipientIntegrationId": customer-123,
  "limits": null,
  "startTime": 2024-06-01T00:00:00Z,
  "endTime": 2024-08-31T23:59:59Z,
  "implicitlyReserved": false,
  "isReservationMandatory": false,
  "reservationLimit": 10,
  "attributes": {discount_percent=20, category=electronics},
} satisfies CreateCouponRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCouponRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


