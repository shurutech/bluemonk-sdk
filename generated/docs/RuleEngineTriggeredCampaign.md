
# RuleEngineTriggeredCampaign

A campaign that was triggered during rule engine evaluation

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`state` | string
`frontendState` | string
`startTime` | Date
`endTime` | Date
`attributes` | { [key: string]: any; }
`created` | Date
`updated` | Date

## Example

```typescript
import type { RuleEngineTriggeredCampaign } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "state": null,
  "frontendState": null,
  "startTime": null,
  "endTime": null,
  "attributes": null,
  "created": null,
  "updated": null,
} satisfies RuleEngineTriggeredCampaign

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuleEngineTriggeredCampaign
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


