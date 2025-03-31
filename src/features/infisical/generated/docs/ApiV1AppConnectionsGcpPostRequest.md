# ApiV1AppConnectionsGcpPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** | The method used to authenticate with GCP. | [default to undefined]
**credentials** | [**ApiV1AppConnectionsGcpPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsGcpPostRequestAllOfAnyOfCredentials.md) |  | [default to undefined]
**name** | **string** | The name of the GCP Connection to create. Must be slug-friendly. | [default to undefined]
**description** | **string** | An optional description for the GCP Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsGcpPostRequest } from './api';

const instance: ApiV1AppConnectionsGcpPostRequest = {
    method,
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
