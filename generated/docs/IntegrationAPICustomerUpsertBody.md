
# IntegrationAPICustomerUpsertBody

Request body for single customer upsert

## Properties

Name | Type
------------ | -------------
`attributes` | { [key: string]: any; }
`responseContent` | Array&lt;string&gt;
`evaluableCampaignIds` | Array&lt;number&gt;

## Example

```typescript
import type { IntegrationAPICustomerUpsertBody } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "attributes": null,
  "responseContent": null,
  "evaluableCampaignIds": null,
} satisfies IntegrationAPICustomerUpsertBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationAPICustomerUpsertBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


