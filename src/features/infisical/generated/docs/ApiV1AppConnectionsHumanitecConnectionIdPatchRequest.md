# ApiV1AppConnectionsHumanitecConnectionIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ApiV1AppConnectionsHumanitecPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsHumanitecPostRequestAllOfAnyOfCredentials.md) |  | [optional] [default to undefined]
**name** | **string** | The updated name of the Humanitec Connection. Must be slug-friendly. | [optional] [default to undefined]
**description** | **string** | The updated description of the Humanitec Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsHumanitecConnectionIdPatchRequest } from './api';

const instance: ApiV1AppConnectionsHumanitecConnectionIdPatchRequest = {
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
