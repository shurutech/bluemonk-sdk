
# AttributeManagementAPIResponse

A custom attribute definition

## Properties

Name | Type
------------ | -------------
`id` | number
`entity` | string
`type` | string
`name` | string
`title` | string
`description` | string
`eventType` | string
`subscribedApplicationsIds` | Array&lt;number&gt;
`created` | Date
`updated` | Date

## Example

```typescript
import type { AttributeManagementAPIResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "entity": customer,
  "type": string,
  "name": loyaltyTier,
  "title": Loyalty Tier,
  "description": Customer loyalty program tier level,
  "eventType": pageView,
  "subscribedApplicationsIds": [1, 2],
  "created": 2024-01-15T10:30:00Z,
  "updated": 2024-01-15T10:30:00Z,
} satisfies AttributeManagementAPIResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AttributeManagementAPIResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


