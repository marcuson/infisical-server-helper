# ApiV1AppConnectionsAzureAppConfigurationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** | The method used to authenticate with Azure App Configuration. | [default to undefined]
**credentials** | [**ApiV1AppConnectionsAzureAppConfigurationPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsAzureAppConfigurationPostRequestAllOfAnyOfCredentials.md) |  | [default to undefined]
**name** | **string** | The name of the Azure App Configuration Connection to create. Must be slug-friendly. | [default to undefined]
**description** | **string** | An optional description for the Azure App Configuration Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsAzureAppConfigurationPostRequest } from './api';

const instance: ApiV1AppConnectionsAzureAppConfigurationPostRequest = {
    method,
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
