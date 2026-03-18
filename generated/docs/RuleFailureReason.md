
# RuleFailureReason

Details about why a rule failed during evaluation

## Properties

Name | Type
------------ | -------------
`campaignId` | number
`campaignName` | string
`rulesetId` | number
`ruleIndex` | number
`ruleName` | string
`conditionIndex` | number
`effectIndex` | number
`details` | string

## Example

```typescript
import type { RuleFailureReason } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignId": null,
  "campaignName": null,
  "rulesetId": null,
  "ruleIndex": null,
  "ruleName": null,
  "conditionIndex": null,
  "effectIndex": null,
  "details": null,
} satisfies RuleFailureReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuleFailureReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


