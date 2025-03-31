# ApiV3SecretsBatchDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**secretPath** | **string** |  | [optional] [default to '/']
**secrets** | [**Array&lt;ApiV3SecretsBatchDeleteRequestSecretsInner&gt;**](ApiV3SecretsBatchDeleteRequestSecretsInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV3SecretsBatchDeleteRequest } from './api';

const instance: ApiV3SecretsBatchDeleteRequest = {
    workspaceId,
    environment,
    secretPath,
    secrets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
