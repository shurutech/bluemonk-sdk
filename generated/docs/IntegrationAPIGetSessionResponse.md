
# IntegrationAPIGetSessionResponse

Response from getting a session

## Properties

Name | Type
------------ | -------------
`customerSession` | [IntegrationAPISessionResponse](IntegrationAPISessionResponse.md)
`effects` | [Array&lt;IntegrationAPITriggeredEffect&gt;](IntegrationAPITriggeredEffect.md)

## Example

```typescript
import type { IntegrationAPIGetSessionResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "customerSession": null,
  "effects": null,
} satisfies IntegrationAPIGetSessionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationAPIGetSessionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


