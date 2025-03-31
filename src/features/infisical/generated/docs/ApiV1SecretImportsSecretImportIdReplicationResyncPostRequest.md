# ApiV1SecretImportsSecretImportIdReplicationResyncPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project where the secret import is located. | [default to undefined]
**environment** | **string** | The slug of the environment where the secret import is located. | [default to undefined]
**path** | **string** | The path of the secret import to update. | [optional] [default to '/']

## Example

```typescript
import { ApiV1SecretImportsSecretImportIdReplicationResyncPostRequest } from './api';

const instance: ApiV1SecretImportsSecretImportIdReplicationResyncPostRequest = {
    workspaceId,
    environment,
    path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
