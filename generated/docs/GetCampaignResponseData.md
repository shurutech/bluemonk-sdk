
# GetCampaignResponseData


## Properties

Name | Type
------------ | -------------
`id` | string
`serialId` | number
`tenantId` | string
`applicationId` | string
`name` | string
`description` | string
`status` | [CampaignStatus](CampaignStatus.md)
`state` | [CampaignState](CampaignState.md)
`startTime` | Date
`endTime` | Date
`activeRulesetId` | string
`attributes` | { [key: string]: any; }
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { GetCampaignResponseData } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": c0a8012e-7d57-4af9-9b35-3e6a1c4b1c8a,
  "serialId": 1,
  "tenantId": 2f0f8b47-9ad7-44a3-8f3f-5a6b5e1f7f2a,
  "applicationId": 7e0e9c16-8b5f-4d4d-9a76-4b4c1b9f0e5a,
  "name": Summer Sale 2024,
  "description": Annual summer promotion with 20% discounts,
  "status": null,
  "state": null,
  "startTime": 2024-06-01T00:00:00Z,
  "endTime": 2024-08-31T23:59:59Z,
  "activeRulesetId": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "attributes": {category=seasonal, discount_type=percentage},
  "createdAt": 2024-01-15T10:30:00Z,
  "updatedAt": 2024-01-15T10:30:00Z,
} satisfies GetCampaignResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetCampaignResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


