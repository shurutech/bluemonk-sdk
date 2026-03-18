
# CatalogSyncPatchManyPayload

Payload for PATCH_MANY action - updates multiple items matching filters

## Properties

Name | Type
------------ | -------------
`price` | number
`attributes` | { [key: string]: any; }
`filters` | [Array&lt;CatalogItemsFilter&gt;](CatalogItemsFilter.md)

## Example

```typescript
import type { CatalogSyncPatchManyPayload } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "price": 49.99,
  "attributes": {onSale=true},
  "filters": null,
} satisfies CatalogSyncPatchManyPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncPatchManyPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


