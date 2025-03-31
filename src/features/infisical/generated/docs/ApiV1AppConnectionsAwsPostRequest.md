# ApiV1AppConnectionsAwsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** | The method used to authenticate with AWS. | [default to undefined]
**credentials** | [**ApiV1AppConnectionsAwsPostRequestAllOfAnyOf1Credentials**](ApiV1AppConnectionsAwsPostRequestAllOfAnyOf1Credentials.md) |  | [default to undefined]
**name** | **string** | The name of the AWS Connection to create. Must be slug-friendly. | [default to undefined]
**description** | **string** | An optional description for the AWS Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsAwsPostRequest } from './api';

const instance: ApiV1AppConnectionsAwsPostRequest = {
    method,
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
