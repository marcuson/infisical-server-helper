# ApiV1AppConnectionsAzureAppConfigurationConnectionIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ApiV1AppConnectionsAzureAppConfigurationPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsAzureAppConfigurationPostRequestAllOfAnyOfCredentials.md) |  | [optional] [default to undefined]
**name** | **string** | The updated name of the Azure App Configuration Connection. Must be slug-friendly. | [optional] [default to undefined]
**description** | **string** | The updated description of the Azure App Configuration Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsAzureAppConfigurationConnectionIdPatchRequest } from './api';

const instance: ApiV1AppConnectionsAzureAppConfigurationConnectionIdPatchRequest = {
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
