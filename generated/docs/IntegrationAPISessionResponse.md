
# IntegrationAPISessionResponse

Session data returned in API responses

## Properties

Name | Type
------------ | -------------
`id` | number
`applicationId` | number
`integrationId` | string
`profileId` | string
`state` | string
`storeIntegrationId` | string
`couponCodes` | Array&lt;string&gt;
`identifiers` | Array&lt;string&gt;
`cartItems` | [Array&lt;SessionCartItem&gt;](SessionCartItem.md)
`additionalCosts` | [{ [key: string]: SessionAdditionalCost; }](SessionAdditionalCost.md)
`attributes` | { [key: string]: any; }
`cartItemsTotal` | number
`additionalCostsTotal` | number
`sessionTotal` | number
`created` | Date
`updated` | Date

## Example

```typescript
import type { IntegrationAPISessionResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "applicationId": null,
  "integrationId": null,
  "profileId": null,
  "state": null,
  "storeIntegrationId": null,
  "couponCodes": null,
  "identifiers": null,
  "cartItems": null,
  "additionalCosts": null,
  "attributes": null,
  "cartItemsTotal": null,
  "additionalCostsTotal": null,
  "sessionTotal": null,
  "created": null,
  "updated": null,
} satisfies IntegrationAPISessionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationAPISessionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


