
# CatalogSyncRequest

Request body for catalog sync operation

## Properties

Name | Type
------------ | -------------
`actions` | [Array&lt;CatalogSyncAction&gt;](CatalogSyncAction.md)

## Example

```typescript
import type { CatalogSyncRequest } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "actions": null,
} satisfies CatalogSyncRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


