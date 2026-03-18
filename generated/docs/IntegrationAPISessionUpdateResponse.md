
# IntegrationAPISessionUpdateResponse

Response from session update with rule engine evaluation

## Properties

Name | Type
------------ | -------------
`effects` | [Array&lt;IntegrationAPITriggeredEffect&gt;](IntegrationAPITriggeredEffect.md)
`createdCoupons` | [Array&lt;CouponIntegrationAPIResponse&gt;](CouponIntegrationAPIResponse.md)
`customerSession` | [IntegrationAPISessionResponse](IntegrationAPISessionResponse.md)
`customerProfile` | [IntegrationAPICustomerResponse](IntegrationAPICustomerResponse.md)
`coupons` | [Array&lt;CouponIntegrationAPIResponse&gt;](CouponIntegrationAPIResponse.md)
`event` | [IntegrationAPIEventResponse](IntegrationAPIEventResponse.md)
`triggeredCampaigns` | [Array&lt;RuleEngineTriggeredCampaign&gt;](RuleEngineTriggeredCampaign.md)
`ruleFailureReasons` | [Array&lt;RuleFailureReason&gt;](RuleFailureReason.md)

## Example

```typescript
import type { IntegrationAPISessionUpdateResponse } from 'bluemonk-sdk'

// TODO: Update the object below with actual values
const example = {
  "effects": null,
  "createdCoupons": null,
  "customerSession": null,
  "customerProfile": null,
  "coupons": null,
  "event": null,
  "triggeredCampaigns": null,
  "ruleFailureReasons": null,
} satisfies IntegrationAPISessionUpdateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationAPISessionUpdateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


