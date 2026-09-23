
# CustomerJourneyViewStepsInner


## Properties

Name | Type
------------ | -------------
`position` | number
`state` | string
`couponCode` | string
`expiresAt` | Date
`completedAt` | Date
`rewardLabel` | string
`timingAnchor` | string
`expectedUnlockAt` | Date
`validityPeriodSeconds` | number

## Example

```typescript
import type { CustomerJourneyViewStepsInner } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "position": 2,
  "state": active,
  "couponCode": LIVE-XYZ,
  "expiresAt": 2026-08-05T23:59:59Z,
  "completedAt": 2026-08-01T10:30:00Z,
  "rewardLabel": Week 3 Voucher,
  "timingAnchor": enrollment,
  "expectedUnlockAt": 2026-08-15T09:00:00Z,
  "validityPeriodSeconds": 604800,
} satisfies CustomerJourneyViewStepsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerJourneyViewStepsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


