# ApiV1AppConnectionsGcpConnectionIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ApiV1AppConnectionsGcpPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsGcpPostRequestAllOfAnyOfCredentials.md) |  | [optional] [default to undefined]
**name** | **string** | The updated name of the GCP Connection. Must be slug-friendly. | [optional] [default to undefined]
**description** | **string** | The updated description of the GCP Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsGcpConnectionIdPatchRequest } from './api';

const instance: ApiV1AppConnectionsGcpConnectionIdPatchRequest = {
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
