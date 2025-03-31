# ApiV1AuthAwsAuthIdentitiesIdentityIdPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stsEndpoint** | **string** | The endpoint URL for the AWS STS API. | [optional] [default to 'https://sts.amazonaws.com/']
**allowedPrincipalArns** | **string** | The comma-separated list of trusted IAM principal ARNs that are allowed to authenticate with Infisical. | [optional] [default to '']
**allowedAccountIds** | **string** | The comma-separated list of trusted AWS account IDs that are allowed to authenticate with Infisical. | [optional] [default to '']
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenMaxTTL** | **number** | The maximum lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenNumUsesLimit** | **number** | The maximum number of times that an access token can be used. | [optional] [default to 0]

## Example

```typescript
import { ApiV1AuthAwsAuthIdentitiesIdentityIdPostRequest } from './api';

const instance: ApiV1AuthAwsAuthIdentitiesIdentityIdPostRequest = {
    stsEndpoint,
    allowedPrincipalArns,
    allowedAccountIds,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenMaxTTL,
    accessTokenNumUsesLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
