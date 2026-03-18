
# CatalogSyncAddPayload

Payload for ADD action - adds a new item to the catalog

## Properties

Name | Type
------------ | -------------
`sku` | string
`price` | number
`product` | [CatalogProduct](CatalogProduct.md)
`attributes` | { [key: string]: any; }
`replaceIfExists` | boolean

## Example

```typescript
import type { CatalogSyncAddPayload } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "sku": PROD-001,
  "price": 99.99,
  "product": null,
  "attributes": {color=blue, size=L},
  "replaceIfExists": false,
} satisfies CatalogSyncAddPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncAddPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


