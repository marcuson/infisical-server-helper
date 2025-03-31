# ApiV1AuthOidcAuthIdentitiesIdentityIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oidcDiscoveryUrl** | **string** | The new URL used to retrieve the OpenID Connect configuration from the identity provider. | [optional] [default to undefined]
**caCert** | **string** | The new PEM-encoded CA cert for establishing secure communication with the Identity Provider endpoints. | [optional] [default to '']
**boundIssuer** | **string** | The new unique identifier of the identity provider issuing the JWT. | [optional] [default to undefined]
**boundAudiences** | **string** | The new list of intended recipients. | [optional] [default to '']
**boundClaims** | **{ [key: string]: string; }** | The new attributes that should be present in the JWT for it to be valid. | [optional] [default to undefined]
**claimMetadataMapping** | **{ [key: string]: string; }** | The new attributes that should be present in the permission metadata from the JWT. | [optional] [default to undefined]
**boundSubject** | **string** | The new expected principal that is the subject of the JWT. | [optional] [default to '']
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The new IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The new lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenMaxTTL** | **number** | The new maximum lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenNumUsesLimit** | **number** | The new maximum number of times that an access token can be used. | [optional] [default to 0]

## Example

```typescript
import { ApiV1AuthOidcAuthIdentitiesIdentityIdPatchRequest } from './api';

const instance: ApiV1AuthOidcAuthIdentitiesIdentityIdPatchRequest = {
    oidcDiscoveryUrl,
    caCert,
    boundIssuer,
    boundAudiences,
    boundClaims,
    claimMetadataMapping,
    boundSubject,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenMaxTTL,
    accessTokenNumUsesLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
