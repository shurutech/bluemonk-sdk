
# SessionUpdateData

Session data for create/update operations

## Properties

Name | Type
------------ | -------------
`profileId` | string
`state` | string
`storeIntegrationId` | string
`couponCodes` | Array&lt;string&gt;
`identifiers` | Array&lt;string&gt;
`attributes` | { [key: string]: any; }
`additionalCosts` | [{ [key: string]: SessionAdditionalCost; }](SessionAdditionalCost.md)
`cartItems` | [Array&lt;SessionCartItem&gt;](SessionCartItem.md)

## Example

```typescript
import type { SessionUpdateData } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "profileId": null,
  "state": null,
  "storeIntegrationId": null,
  "couponCodes": null,
  "identifiers": null,
  "attributes": null,
  "additionalCosts": null,
  "cartItems": null,
} satisfies SessionUpdateData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SessionUpdateData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


