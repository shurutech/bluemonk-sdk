
# CreateStoreRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`integrationId` | string
`attributes` | { [key: string]: any; }

## Example

```typescript
import type { CreateStoreRequest } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Downtown Store,
  "description": Main downtown location serving the central business district,
  "integrationId": store-downtown-001,
  "attributes": {region=north, type=flagship, capacity=500},
} satisfies CreateStoreRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateStoreRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


