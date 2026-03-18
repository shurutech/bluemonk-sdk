
# CatalogSyncAddAction

ADD action - adds new items to the catalog

## Properties

Name | Type
------------ | -------------
`type` | string
`payload` | [CatalogSyncAddPayload](CatalogSyncAddPayload.md)

## Example

```typescript
import type { CatalogSyncAddAction } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "payload": null,
} satisfies CatalogSyncAddAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncAddAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


