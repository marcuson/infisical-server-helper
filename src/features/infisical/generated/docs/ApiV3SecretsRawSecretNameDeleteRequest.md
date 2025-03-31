# ApiV3SecretsRawSecretNameDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project where the secret is located. | [default to undefined]
**environment** | **string** | The slug of the environment where the secret is located. | [default to undefined]
**secretPath** | **string** | The path of the secret. | [optional] [default to '/']
**type** | **string** | The type of the secret to delete. | [optional] [default to TypeEnum_Shared]

## Example

```typescript
import { ApiV3SecretsRawSecretNameDeleteRequest } from './api';

const instance: ApiV3SecretsRawSecretNameDeleteRequest = {
    workspaceId,
    environment,
    secretPath,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
