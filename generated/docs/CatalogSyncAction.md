
# CatalogSyncAction

A single sync action with type and payload. The payload structure changes based on the selected action type. 

## Properties

Name | Type
------------ | -------------
`type` | string
`payload` | [CatalogSyncRemoveManyPayload](CatalogSyncRemoveManyPayload.md)

## Example

```typescript
import type { CatalogSyncAction } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "payload": null,
} satisfies CatalogSyncAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogSyncAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


