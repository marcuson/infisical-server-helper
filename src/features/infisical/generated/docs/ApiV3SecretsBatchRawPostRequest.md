# ApiV3SecretsBatchRawPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** | The slug of the project to update the secret in. | [optional] [default to undefined]
**workspaceId** | **string** | The ID of the project to update the secret in. | [optional] [default to undefined]
**environment** | **string** | The slug of the environment to create the secret in. | [default to undefined]
**secretPath** | **string** | The path to create the secret in. | [optional] [default to '/']
**secrets** | [**Array&lt;ApiV3SecretsBatchRawPostRequestSecretsInner&gt;**](ApiV3SecretsBatchRawPostRequestSecretsInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV3SecretsBatchRawPostRequest } from './api';

const instance: ApiV3SecretsBatchRawPostRequest = {
    projectSlug,
    workspaceId,
    environment,
    secretPath,
    secrets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
