# ApiV3SecretsBatchPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**secretPath** | **string** |  | [optional] [default to '/']
**secrets** | [**Array&lt;ApiV3SecretsBatchPatchRequestSecretsInner&gt;**](ApiV3SecretsBatchPatchRequestSecretsInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV3SecretsBatchPatchRequest } from './api';

const instance: ApiV3SecretsBatchPatchRequest = {
    workspaceId,
    environment,
    secretPath,
    secrets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
