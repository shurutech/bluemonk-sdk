
# CatalogSyncPatchManyAction

PATCH_MANY action - updates multiple items matching filter criteria (max 1 action per request)

## Properties

Name | Type
------------ | -------------
`type` | string
`payload` | [CatalogSyncPatchManyPayload](CatalogSyncPatchManyPayload.md)

## Example

```typescript
import type { CatalogSyncPatchManyAction } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "payload": null,
} satisfies CatalogSyncPatchManyAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncPatchManyAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


