
# CampaignResponse


## Properties

Name | Type
------------ | -------------
`id` | number
`applicationId` | number
`name` | string
`description` | string
`state` | [CampaignStatus](CampaignStatus.md)
`frontendState` | [CampaignState](CampaignState.md)
`startTime` | Date
`endTime` | Date
`attributes` | { [key: string]: any; }
`created` | Date
`updated` | Date

## Example

```typescript
import type { CampaignResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "applicationId": 5,
  "name": Summer Sale 2024,
  "description": Annual summer promotion with 20% discounts,
  "state": null,
  "frontendState": null,
  "startTime": 2024-06-01T00:00:00Z,
  "endTime": 2024-08-31T23:59:59Z,
  "attributes": {category=seasonal, discount_type=percentage},
  "created": 2024-01-15T10:30:00Z,
  "updated": 2024-01-15T10:30:00Z,
} satisfies CampaignResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


