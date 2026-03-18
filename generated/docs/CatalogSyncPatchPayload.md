
# CatalogSyncPatchPayload

Payload for PATCH action - updates an existing item or creates if not exists

## Properties

Name | Type
------------ | -------------
`sku` | string
`price` | number
`product` | [CatalogProduct](CatalogProduct.md)
`attributes` | { [key: string]: any; }
`createIfNotExists` | boolean

## Example

```typescript
import type { CatalogSyncPatchPayload } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "sku": PROD-001,
  "price": 79.99,
  "product": null,
  "attributes": {color=red},
  "createIfNotExists": true,
} satisfies CatalogSyncPatchPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncPatchPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


