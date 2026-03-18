
# IntegrationAPIEventTrackBody

Request body for tracking an event

## Properties

Name | Type
------------ | -------------
`type` | string
`profileId` | string
`storeIntegrationId` | string
`attributes` | { [key: string]: any; }
`responseContent` | Array&lt;string&gt;
`evaluableCampaignIds` | Array&lt;number&gt;

## Example

```typescript
import type { IntegrationAPIEventTrackBody } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "profileId": null,
  "storeIntegrationId": null,
  "attributes": null,
  "responseContent": null,
  "evaluableCampaignIds": null,
} satisfies IntegrationAPIEventTrackBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationAPIEventTrackBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


