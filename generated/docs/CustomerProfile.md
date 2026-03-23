
# CustomerProfile

Individual customer profile for upsert operation

## Properties

Name | Type
------------ | -------------
`integrationId` | string
`attributes` | { [key: string]: any; }

## Example

```typescript
import type { CustomerProfile } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "integrationId": cust-001,
  "attributes": {tier=gold, points=500, isVip=true},
} satisfies CustomerProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


