
# SessionCartItem

A cart item within a session

## Properties

Name | Type
------------ | -------------
`sku` | string
`quantity` | number
`price` | number
`product` | [SessionCartItemProduct](SessionCartItemProduct.md)
`attributes` | { [key: string]: any; }

## Example

```typescript
import type { SessionCartItem } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "sku": null,
  "quantity": null,
  "price": null,
  "product": null,
  "attributes": null,
} satisfies SessionCartItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SessionCartItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


