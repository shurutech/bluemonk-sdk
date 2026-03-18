
# CatalogSyncPatchAction

PATCH action - updates existing items or creates if not exists

## Properties

Name | Type
------------ | -------------
`type` | string
`payload` | [CatalogSyncPatchPayload](CatalogSyncPatchPayload.md)

## Example

```typescript
import type { CatalogSyncPatchAction } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "payload": null,
} satisfies CatalogSyncPatchAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncPatchAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


