
# IntegrationAPISessionUpdateBody

Request body for session update

## Properties

Name | Type
------------ | -------------
`customerSession` | [SessionUpdateData](SessionUpdateData.md)
`evaluableCampaignIds` | Array&lt;number&gt;
`responseContent` | Array&lt;string&gt;

## Example

```typescript
import type { IntegrationAPISessionUpdateBody } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "customerSession": null,
  "evaluableCampaignIds": null,
  "responseContent": null,
} satisfies IntegrationAPISessionUpdateBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationAPISessionUpdateBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


