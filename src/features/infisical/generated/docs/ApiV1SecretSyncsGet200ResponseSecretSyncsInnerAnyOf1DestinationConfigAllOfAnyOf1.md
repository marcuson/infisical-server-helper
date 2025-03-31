# ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf1DestinationConfigAllOfAnyOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mappingBehavior** | **string** | How secrets from Infisical should be mapped to AWS Secrets Manager; one-to-one or many-to-one. | [default to undefined]
**secretName** | **string** | The secret name in AWS Secrets Manager to sync to when using mapping behavior many-to-one. | [default to undefined]

## Example

```typescript
import { ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf1DestinationConfigAllOfAnyOf1 } from './api';

const instance: ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf1DestinationConfigAllOfAnyOf1 = {
    mappingBehavior,
    secretName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
