# ApiV1SecretImportsSecretImportIdDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project to delete the secret import from. | [default to undefined]
**environment** | **string** | The slug of the environment where the secret import is located. | [default to undefined]
**path** | **string** | The path of the secret import to delete. | [optional] [default to '/']

## Example

```typescript
import { ApiV1SecretImportsSecretImportIdDeleteRequest } from './api';

const instance: ApiV1SecretImportsSecretImportIdDeleteRequest = {
    workspaceId,
    environment,
    path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
