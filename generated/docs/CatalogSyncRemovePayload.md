
# CatalogSyncRemovePayload

Payload for REMOVE action - removes an item by SKU

## Properties

Name | Type
------------ | -------------
`sku` | string

## Example

```typescript
import type { CatalogSyncRemovePayload } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "sku": PROD-001,
} satisfies CatalogSyncRemovePayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncRemovePayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


