
# IntegrationAPIEventResponse

Event data returned in API responses

## Properties

Name | Type
------------ | -------------
`id` | number
`applicationId` | number
`type` | string
`attributes` | { [key: string]: any; }
`profileId` | string
`storeIntegrationId` | string
`sessionId` | string
`effects` | [Array&lt;IntegrationAPITriggeredEffect&gt;](IntegrationAPITriggeredEffect.md)
`created` | Date

## Example

```typescript
import type { IntegrationAPIEventResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "applicationId": null,
  "type": null,
  "attributes": null,
  "profileId": null,
  "storeIntegrationId": null,
  "sessionId": null,
  "effects": null,
  "created": null,
} satisfies IntegrationAPIEventResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationAPIEventResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


