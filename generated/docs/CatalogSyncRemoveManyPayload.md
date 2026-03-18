
# CatalogSyncRemoveManyPayload

Payload for REMOVE_MANY action - removes multiple items matching filters

## Properties

Name | Type
------------ | -------------
`filters` | [Array&lt;CatalogItemsFilter&gt;](CatalogItemsFilter.md)

## Example

```typescript
import type { CatalogSyncRemoveManyPayload } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "filters": null,
} satisfies CatalogSyncRemoveManyPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncRemoveManyPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


