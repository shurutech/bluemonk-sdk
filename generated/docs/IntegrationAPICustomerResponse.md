
# IntegrationAPICustomerResponse

Customer details returned by integration API

## Properties

Name | Type
------------ | -------------
`id` | number
`sandbox` | boolean
`integrationId` | string
`attributes` | { [key: string]: any; }
`created` | Date

## Example

```typescript
import type { IntegrationAPICustomerResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 123,
  "sandbox": true,
  "integrationId": cust-001,
  "attributes": {tier=gold, points=500},
  "created": 2024-01-15T10:30:00Z,
} satisfies IntegrationAPICustomerResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationAPICustomerResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


