
# CreateAttributeManagementAPIRequest

Request body for creating a custom attribute

## Properties

Name | Type
------------ | -------------
`entity` | string
`type` | string
`name` | string
`title` | string
`description` | string
`subscribedApplicationsIds` | Array&lt;number&gt;
`eventType` | string

## Example

```typescript
import type { CreateAttributeManagementAPIRequest } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "entity": customer,
  "type": string,
  "name": loyaltyTier,
  "title": Loyalty Tier,
  "description": Customer loyalty program tier level,
  "subscribedApplicationsIds": [1, 2],
  "eventType": pageView,
} satisfies CreateAttributeManagementAPIRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAttributeManagementAPIRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


