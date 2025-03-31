# ApiV1AuthAwsAuthIdentitiesIdentityIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stsEndpoint** | **string** | The new endpoint URL for the AWS STS API. | [optional] [default to undefined]
**allowedPrincipalArns** | **string** | The new comma-separated list of trusted IAM principal ARNs that are allowed to authenticate with Infisical. | [optional] [default to '']
**allowedAccountIds** | **string** | The new comma-separated list of trusted AWS account IDs that are allowed to authenticate with Infisical. | [optional] [default to '']
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The new IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The new lifetime for an access token in seconds. | [optional] [default to undefined]
**accessTokenNumUsesLimit** | **number** | The new maximum number of times that an access token can be used. | [optional] [default to undefined]
**accessTokenMaxTTL** | **number** | The new maximum lifetime for an access token in seconds. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AuthAwsAuthIdentitiesIdentityIdPatchRequest } from './api';

const instance: ApiV1AuthAwsAuthIdentitiesIdentityIdPatchRequest = {
    stsEndpoint,
    allowedPrincipalArns,
    allowedAccountIds,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenNumUsesLimit,
    accessTokenMaxTTL,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
