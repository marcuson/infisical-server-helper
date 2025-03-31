# ApiV1AppConnectionsHumanitecPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** | The method used to authenticate with Humanitec. | [default to undefined]
**credentials** | [**ApiV1AppConnectionsHumanitecPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsHumanitecPostRequestAllOfAnyOfCredentials.md) |  | [default to undefined]
**name** | **string** | The name of the Humanitec Connection to create. Must be slug-friendly. | [default to undefined]
**description** | **string** | An optional description for the Humanitec Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsHumanitecPostRequest } from './api';

const instance: ApiV1AppConnectionsHumanitecPostRequest = {
    method,
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
