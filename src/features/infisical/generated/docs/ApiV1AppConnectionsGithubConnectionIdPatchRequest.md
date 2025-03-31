# ApiV1AppConnectionsGithubConnectionIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ApiV1AppConnectionsGithubConnectionIdPatchRequestAllOfCredentials**](ApiV1AppConnectionsGithubConnectionIdPatchRequestAllOfCredentials.md) |  | [optional] [default to undefined]
**name** | **string** | The updated name of the GitHub Connection. Must be slug-friendly. | [optional] [default to undefined]
**description** | **string** | The updated description of the GitHub Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsGithubConnectionIdPatchRequest } from './api';

const instance: ApiV1AppConnectionsGithubConnectionIdPatchRequest = {
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
