
# GetCampaignResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`data` | [GetCampaignResponseData](GetCampaignResponseData.md)

## Example

```typescript
import type { GetCampaignResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "message": campaign retrieved successfully,
  "data": null,
} satisfies GetCampaignResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCampaignResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


