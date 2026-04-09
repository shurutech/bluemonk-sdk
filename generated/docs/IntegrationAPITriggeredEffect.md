
# IntegrationAPITriggeredEffect

A triggered effect from rule engine evaluation

## Properties

Name | Type
------------ | -------------
`campaignId` | number
`rulesetId` | number
`ruleIndex` | number
`ruleName` | string
`conditionIndex` | number
`effectType` | string
`props` | { [key: string]: any; }
`triggeredByCoupon` | number

## Example

```typescript
import type { IntegrationAPITriggeredEffect } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignId": null,
  "rulesetId": null,
  "ruleIndex": null,
  "ruleName": null,
  "conditionIndex": null,
  "effectType": null,
  "props": null,
  "triggeredByCoupon": null,
} satisfies IntegrationAPITriggeredEffect

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationAPITriggeredEffect
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


