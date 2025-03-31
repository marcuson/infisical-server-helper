# ApiV1AppConnectionsGithubPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** | The method used to authenticate with GitHub. | [default to undefined]
**credentials** | [**ApiV1AppConnectionsGithubPostRequestAllOfAnyOf1Credentials**](ApiV1AppConnectionsGithubPostRequestAllOfAnyOf1Credentials.md) |  | [default to undefined]
**name** | **string** | The name of the GitHub Connection to create. Must be slug-friendly. | [default to undefined]
**description** | **string** | An optional description for the GitHub Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsGithubPostRequest } from './api';

const instance: ApiV1AppConnectionsGithubPostRequest = {
    method,
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
