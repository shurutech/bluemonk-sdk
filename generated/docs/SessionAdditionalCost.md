
# SessionAdditionalCost

An additional cost entry (e.g. shipping, tax)

## Properties

Name | Type
------------ | -------------
`price` | number

## Example

```typescript
import type { SessionAdditionalCost } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "price": null,
} satisfies SessionAdditionalCost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SessionAdditionalCost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


