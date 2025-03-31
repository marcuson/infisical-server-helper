# ApiV1AppConnectionsAwsConnectionIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ApiV1AppConnectionsAwsConnectionIdPatchRequestAllOfCredentials**](ApiV1AppConnectionsAwsConnectionIdPatchRequestAllOfCredentials.md) |  | [optional] [default to undefined]
**name** | **string** | The updated name of the AWS Connection. Must be slug-friendly. | [optional] [default to undefined]
**description** | **string** | The updated description of the AWS Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsAwsConnectionIdPatchRequest } from './api';

const instance: ApiV1AppConnectionsAwsConnectionIdPatchRequest = {
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
