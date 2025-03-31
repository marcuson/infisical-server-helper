# ApiV1DynamicSecretsNamePatchRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | **any** | The new partial values for the configured provider of the dynamic secret | [optional] [default to undefined]
**defaultTTL** | **string** | The default TTL that will be applied for all the leases. | [optional] [default to undefined]
**maxTTL** | **string** | The maximum limit a TTL can be leases or renewed. | [optional] [default to undefined]
**newName** | **string** | The new name for the dynamic secret. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1DynamicSecretsNamePatchRequestData } from './api';

const instance: ApiV1DynamicSecretsNamePatchRequestData = {
    inputs,
    defaultTTL,
    maxTTL,
    newName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
