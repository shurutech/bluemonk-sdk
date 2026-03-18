
# CatalogSyncResponseData

Updated catalog information

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`description` | string
`created` | Date
`modified` | Date

## Example

```typescript
import type { CatalogSyncResponseData } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "name": Product Catalog,
  "description": Main product catalog for the store,
  "created": 2024-01-08T12:00:00Z,
  "modified": 2024-01-09T15:30:00Z,
} satisfies CatalogSyncResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


