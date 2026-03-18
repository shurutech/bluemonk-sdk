
# CampaignState

The computed state of the campaign based on its status and schedule. - `scheduled`: Campaign is enabled but start time is in the future - `running`: Campaign is enabled and currently active - `expired`: Campaign is enabled but end time has passed - `disabled`: Campaign is disabled by admin 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { CampaignState } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies CampaignState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


