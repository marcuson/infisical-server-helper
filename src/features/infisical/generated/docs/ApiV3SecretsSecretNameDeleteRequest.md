# ApiV3SecretsSecretNameDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to TypeEnum_Shared]
**secretPath** | **string** |  | [optional] [default to '/']
**secretId** | **string** |  | [optional] [default to undefined]
**workspaceId** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV3SecretsSecretNameDeleteRequest } from './api';

const instance: ApiV3SecretsSecretNameDeleteRequest = {
    type,
    secretPath,
    secretId,
    workspaceId,
    environment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
