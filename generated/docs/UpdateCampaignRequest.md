
# UpdateCampaignRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`state` | [CampaignStatus](CampaignStatus.md)
`attributes` | { [key: string]: any; }

## Example

```typescript
import type { UpdateCampaignRequest } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Summer Sale 2024 - Extended,
  "description": Extended summer promotion with additional discounts,
  "state": null,
  "attributes": {category=seasonal, extended=true},
} satisfies UpdateCampaignRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCampaignRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


