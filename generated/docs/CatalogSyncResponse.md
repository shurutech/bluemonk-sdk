
# CatalogSyncResponse

Response from a successful catalog sync operation

## Properties

Name | Type
------------ | -------------
`message` | string
`data` | [CatalogSyncResponseData](CatalogSyncResponseData.md)

## Example

```typescript
import type { CatalogSyncResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "message": catalog items synced successfully,
  "data": null,
} satisfies CatalogSyncResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


