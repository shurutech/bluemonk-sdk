
# StoreResponse


## Properties

Name | Type
------------ | -------------
`id` | number
`applicationId` | number
`name` | string
`description` | string
`integrationId` | string
`attributes` | { [key: string]: any; }
`created` | Date
`updated` | Date

## Example

```typescript
import type { StoreResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "applicationId": 5,
  "name": Downtown Store,
  "description": Main downtown location,
  "integrationId": store-downtown-001,
  "attributes": {region=north, type=flagship},
  "created": 2024-01-15T10:30:00Z,
  "updated": 2024-01-15T10:30:00Z,
} satisfies StoreResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoreResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


