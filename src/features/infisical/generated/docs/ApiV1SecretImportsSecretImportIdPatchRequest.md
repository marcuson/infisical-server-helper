# ApiV1SecretImportsSecretImportIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project where the secret import is located. | [default to undefined]
**environment** | **string** | The slug of the environment where the secret import is located. | [default to undefined]
**path** | **string** | The path of the secret import to update. | [optional] [default to '/']
**_import** | [**ApiV1SecretImportsSecretImportIdPatchRequestImport**](ApiV1SecretImportsSecretImportIdPatchRequestImport.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretImportsSecretImportIdPatchRequest } from './api';

const instance: ApiV1SecretImportsSecretImportIdPatchRequest = {
    workspaceId,
    environment,
    path,
    _import,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
