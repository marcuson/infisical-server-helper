# ApiV1AuthJwtAuthIdentitiesIdentityIdPatchRequestAnyOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurationType** | **string** | The configuration for validating JWTs. Must be one of: \&#39;jwks\&#39;, \&#39;static\&#39; | [default to undefined]
**jwksUrl** | **string** | The URL of the JWKS endpoint. Required if configurationType is \&#39;jwks\&#39;. This endpoint must serve JSON Web Key Sets (JWKS) containing the public keys used to verify JWT signatures. | [optional] [default to '']
**jwksCaCert** | **string** | The PEM-encoded CA certificate for validating the TLS connection to the JWKS endpoint. | [optional] [default to '']
**publicKeys** | **Array&lt;string&gt;** | A list of PEM-encoded public keys used to verify JWT signatures. Required if configurationType is \&#39;static\&#39;. Each key must be in RSA or ECDSA format and properly PEM-encoded with BEGIN/END markers. | [default to undefined]
**boundIssuer** | **string** | The new unique identifier of the JWT provider. | [optional] [default to '']
**boundAudiences** | **string** | The new list of intended recipients. | [optional] [default to '']
**boundClaims** | **{ [key: string]: string; }** | The new attributes that should be present in the JWT for it to be valid. | [optional] [default to undefined]
**boundSubject** | **string** | The new expected principal that is the subject of the JWT. | [optional] [default to '']
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The new IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The new lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenMaxTTL** | **number** | The new maximum lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenNumUsesLimit** | **number** | The new maximum number of times that an access token can be used. | [optional] [default to 0]

## Example

```typescript
import { ApiV1AuthJwtAuthIdentitiesIdentityIdPatchRequestAnyOf1 } from './api';

const instance: ApiV1AuthJwtAuthIdentitiesIdentityIdPatchRequestAnyOf1 = {
    configurationType,
    jwksUrl,
    jwksCaCert,
    publicKeys,
    boundIssuer,
    boundAudiences,
    boundClaims,
    boundSubject,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenMaxTTL,
    accessTokenNumUsesLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
