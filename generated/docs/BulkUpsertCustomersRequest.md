
# BulkUpsertCustomersRequest

Request body for bulk upserting customers

## Properties

Name | Type
------------ | -------------
`customerProfiles` | [Array&lt;UpsertCustomerRequest&gt;](UpsertCustomerRequest.md)

## Example

```typescript
import type { BulkUpsertCustomersRequest } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "customerProfiles": null,
} satisfies BulkUpsertCustomersRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpsertCustomersRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


