# ApiV3SecretsBatchRawDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** | The slug of the project to delete the secret in. | [optional] [default to undefined]
**workspaceId** | **string** | The ID of the project where the secret is located. | [optional] [default to undefined]
**environment** | **string** | The slug of the environment where the secret is located. | [default to undefined]
**secretPath** | **string** | The path of the secret. | [optional] [default to '/']
**secrets** | [**Array&lt;ApiV3SecretsBatchRawDeleteRequestSecretsInner&gt;**](ApiV3SecretsBatchRawDeleteRequestSecretsInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV3SecretsBatchRawDeleteRequest } from './api';

const instance: ApiV3SecretsBatchRawDeleteRequest = {
    projectSlug,
    workspaceId,
    environment,
    secretPath,
    secrets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
