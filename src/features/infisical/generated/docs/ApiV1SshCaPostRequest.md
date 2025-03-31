# ApiV1SshCaPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **string** | The ID of the project to create the SSH CA in. | [default to undefined]
**friendlyName** | **string** | A friendly name for the SSH CA. | [default to undefined]
**keyAlgorithm** | **string** | The type of public key algorithm and size, in bits, of the key pair for the SSH CA. | [optional] [default to KeyAlgorithmEnum_Rsa2048]

## Example

```typescript
import { ApiV1SshCaPostRequest } from './api';

const instance: ApiV1SshCaPostRequest = {
    projectId,
    friendlyName,
    keyAlgorithm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
