# ApiV1AuthUniversalAuthIdentitiesIdentityIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientSecretTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The new list of IPs or CIDR ranges that the Client Secret can be used from. | [optional] [default to undefined]
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The new list of IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The new lifetime for an access token in seconds. | [optional] [default to undefined]
**accessTokenNumUsesLimit** | **number** | The new maximum number of times that an access token can be used. | [optional] [default to undefined]
**accessTokenMaxTTL** | **number** | The new maximum lifetime for an access token in seconds. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AuthUniversalAuthIdentitiesIdentityIdPatchRequest } from './api';

const instance: ApiV1AuthUniversalAuthIdentitiesIdentityIdPatchRequest = {
    clientSecretTrustedIps,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenNumUsesLimit,
    accessTokenMaxTTL,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
