# ApiV1AppConnectionsAzureKeyVaultPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** | The method used to authenticate with Azure Key Vault. | [default to undefined]
**credentials** | [**ApiV1AppConnectionsAzureKeyVaultPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsAzureKeyVaultPostRequestAllOfAnyOfCredentials.md) |  | [default to undefined]
**name** | **string** | The name of the Azure Key Vault Connection to create. Must be slug-friendly. | [default to undefined]
**description** | **string** | An optional description for the Azure Key Vault Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsAzureKeyVaultPostRequest } from './api';

const instance: ApiV1AppConnectionsAzureKeyVaultPostRequest = {
    method,
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
