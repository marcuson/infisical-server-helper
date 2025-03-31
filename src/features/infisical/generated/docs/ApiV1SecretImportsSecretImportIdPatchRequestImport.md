# ApiV1SecretImportsSecretImportIdPatchRequestImport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **string** | The new environment slug to import from. | [optional] [default to undefined]
**path** | **string** | The new path to import from. | [optional] [default to undefined]
**position** | **number** | The new position of the secret import. The lowest number will be displayed as the first import. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1SecretImportsSecretImportIdPatchRequestImport } from './api';

const instance: ApiV1SecretImportsSecretImportIdPatchRequestImport = {
    environment,
    path,
    position,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
