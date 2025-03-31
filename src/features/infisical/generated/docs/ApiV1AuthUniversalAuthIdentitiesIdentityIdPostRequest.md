# ApiV1AuthUniversalAuthIdentitiesIdentityIdPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientSecretTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | A list of IPs or CIDR ranges that the Client Secret can be used from together with the Client ID to get back an access token. You can use 0.0.0.0/0, to allow usage from any network address. | [optional] [default to undefined]
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | A list of IPs or CIDR ranges that access tokens can be used from. You can use 0.0.0.0/0, to allow usage from any network address. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The lifetime for an access token in seconds. This value will be referenced at renewal time. | [optional] [default to 2592000]
**accessTokenMaxTTL** | **number** | The maximum lifetime for an access token in seconds. This value will be referenced at renewal time. | [optional] [default to 2592000]
**accessTokenNumUsesLimit** | **number** | The maximum number of times that an access token can be used; a value of 0 implies infinite number of uses. | [optional] [default to 0]

## Example

```typescript
import { ApiV1AuthUniversalAuthIdentitiesIdentityIdPostRequest } from './api';

const instance: ApiV1AuthUniversalAuthIdentitiesIdentityIdPostRequest = {
    clientSecretTrustedIps,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenMaxTTL,
    accessTokenNumUsesLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
