# ApiV1AuthAwsAuthLoginPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **string** | The ID of the identity to login. | [default to undefined]
**iamHttpRequestMethod** | **string** | The HTTP request method used in the signed request. | [optional] [default to 'POST']
**iamRequestBody** | **string** | The base64-encoded body of the signed request. Most likely, the base64-encoding of Action&#x3D;GetCallerIdentity&amp;Version&#x3D;2011-06-15. | [default to undefined]
**iamRequestHeaders** | **string** | The base64-encoded headers of the sts:GetCallerIdentity signed request. | [default to undefined]

## Example

```typescript
import { ApiV1AuthAwsAuthLoginPostRequest } from './api';

const instance: ApiV1AuthAwsAuthLoginPostRequest = {
    identityId,
    iamHttpRequestMethod,
    iamRequestBody,
    iamRequestHeaders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
