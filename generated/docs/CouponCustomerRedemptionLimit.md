
# CouponCustomerRedemptionLimit

Defines customer-specific redemption limits for a coupon

## Properties

Name | Type
------------ | -------------
`action` | string
`entities` | Array&lt;string&gt;
`limit` | number
`period` | [CouponLimitPeriod](CouponLimitPeriod.md)

## Example

```typescript
import type { CouponCustomerRedemptionLimit } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "action": redeemCoupon,
  "entities": [Coupon],
  "limit": 1,
  "period": null,
} satisfies CouponCustomerRedemptionLimit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponCustomerRedemptionLimit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


