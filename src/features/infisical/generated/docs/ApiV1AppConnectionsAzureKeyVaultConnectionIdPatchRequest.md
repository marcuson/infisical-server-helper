# ApiV1AppConnectionsAzureKeyVaultConnectionIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ApiV1AppConnectionsAzureKeyVaultPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsAzureKeyVaultPostRequestAllOfAnyOfCredentials.md) |  | [optional] [default to undefined]
**name** | **string** | The updated name of the Azure Key Vault Connection. Must be slug-friendly. | [optional] [default to undefined]
**description** | **string** | The updated description of the Azure Key Vault Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsAzureKeyVaultConnectionIdPatchRequest } from './api';

const instance: ApiV1AppConnectionsAzureKeyVaultConnectionIdPatchRequest = {
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
