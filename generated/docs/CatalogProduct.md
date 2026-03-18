
# CatalogProduct

Product information for a catalog item

## Properties

Name | Type
------------ | -------------
`name` | string

## Example

```typescript
import type { CatalogProduct } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Premium Widget,
} satisfies CatalogProduct

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogProduct
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


