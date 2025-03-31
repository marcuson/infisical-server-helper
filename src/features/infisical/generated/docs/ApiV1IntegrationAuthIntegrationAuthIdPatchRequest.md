# ApiV1IntegrationAuthIntegrationAuthIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **string** | The slug of integration for the auth object. | [optional] [default to undefined]
**accessId** | **string** | The unique authorized access ID of the external integration provider. | [optional] [default to undefined]
**accessToken** | **string** | The unique authorized access token of the external integration provider. | [optional] [default to undefined]
**awsAssumeIamRoleArn** | **string** | The AWS IAM Role to be assumed by Infisical. | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]
**refreshToken** | **string** | The refresh token for integration authorization. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1IntegrationAuthIntegrationAuthIdPatchRequest } from './api';

const instance: ApiV1IntegrationAuthIntegrationAuthIdPatchRequest = {
    integration,
    accessId,
    accessToken,
    awsAssumeIamRoleArn,
    url,
    namespace,
    refreshToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
