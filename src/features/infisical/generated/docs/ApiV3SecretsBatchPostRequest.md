# ApiV3SecretsBatchPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**secretPath** | **string** |  | [optional] [default to '/']
**secrets** | [**Array&lt;ApiV3SecretsBatchPostRequestSecretsInner&gt;**](ApiV3SecretsBatchPostRequestSecretsInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV3SecretsBatchPostRequest } from './api';

const instance: ApiV3SecretsBatchPostRequest = {
    workspaceId,
    environment,
    secretPath,
    secrets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
