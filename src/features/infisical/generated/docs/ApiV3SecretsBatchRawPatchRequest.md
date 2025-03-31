# ApiV3SecretsBatchRawPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** | The slug of the project to delete the secret in. | [optional] [default to undefined]
**workspaceId** | **string** | The ID of the project where the secret is located. | [optional] [default to undefined]
**environment** | **string** | The slug of the environment where the secret is located. | [default to undefined]
**secretPath** | **string** | The default path for secrets to update or upsert, if not provided in the secret details. | [optional] [default to '/']
**mode** | **string** | Defines how the system should handle missing secrets during an update. | [optional] [default to ModeEnum_FailOnNotFound]
**secrets** | [**Array&lt;ApiV3SecretsBatchRawPatchRequestSecretsInner&gt;**](ApiV3SecretsBatchRawPatchRequestSecretsInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV3SecretsBatchRawPatchRequest } from './api';

const instance: ApiV3SecretsBatchRawPatchRequest = {
    projectSlug,
    workspaceId,
    environment,
    secretPath,
    mode,
    secrets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
