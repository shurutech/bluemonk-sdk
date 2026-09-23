
# CustomerJourneyView

The calling customer\'s view of their run through a sequential voucher journey.  Only completed and active steps reveal their redeemable `couponCode`. A step\'s coupon is minted when the step qualifies — at enrollment for the first step, or when the previous step\'s coupon is redeemed — and stays hidden until the step activates. Locked steps stay code-less but still surface a teaser — the reward label, timing anchor, once-unlocked validity, and, for steps anchored to `enrollment`, the `expectedUnlockAt` date — so the customer\'s wallet can render the full sequence with upcoming vouchers greyed out. 

## Properties

Name | Type
------------ | -------------
`journeyId` | number
`journeyName` | string
`status` | string
`instanceNumber` | number
`currentPosition` | number
`totalSteps` | number
`steps` | [Array&lt;CustomerJourneyViewStepsInner&gt;](CustomerJourneyViewStepsInner.md)

## Example

```typescript
import type { CustomerJourneyView } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "journeyId": 5,
  "journeyName": Welcome Journey,
  "status": in_progress,
  "instanceNumber": 1,
  "currentPosition": 2,
  "totalSteps": 4,
  "steps": null,
} satisfies CustomerJourneyView

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerJourneyView
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


