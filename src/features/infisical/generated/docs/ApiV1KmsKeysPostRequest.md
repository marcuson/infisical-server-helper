# ApiV1KmsKeysPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **string** | The ID of the project to create the key in. | [default to undefined]
**name** | **string** | The name of the key to be created. Must be slug-friendly. | [default to undefined]
**description** | **string** | An optional description of the key. | [optional] [default to undefined]
**encryptionAlgorithm** | **string** | The algorithm to use when performing cryptographic operations with the key. | [optional] [default to EncryptionAlgorithmEnum_Aes256Gcm]

## Example

```typescript
import { ApiV1KmsKeysPostRequest } from './api';

const instance: ApiV1KmsKeysPostRequest = {
    projectId,
    name,
    description,
    encryptionAlgorithm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
