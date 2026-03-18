
# ErrorResponse

Standard error response

## Properties

Name | Type
------------ | -------------
`message` | string
`errors` | [Array&lt;ErrorResponseErrorsInner&gt;](ErrorResponseErrorsInner.md)

## Example

```typescript
import type { ErrorResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "message": validation failed,
  "errors": [{details=integrationId: is required}, {details=attributes: is invalid}],
} satisfies ErrorResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


