# ApiV1AuthJwtAuthIdentitiesIdentityIdPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurationType** | **string** | The configuration for validating JWTs. Must be one of: \&#39;jwks\&#39;, \&#39;static\&#39; | [default to undefined]
**jwksUrl** | **string** | The URL of the JWKS endpoint. Required if configurationType is \&#39;jwks\&#39;. This endpoint must serve JSON Web Key Sets (JWKS) containing the public keys used to verify JWT signatures. | [default to '']
**jwksCaCert** | **string** | The PEM-encoded CA certificate for validating the TLS connection to the JWKS endpoint. | [optional] [default to '']
**publicKeys** | **Array&lt;string&gt;** | A list of PEM-encoded public keys used to verify JWT signatures. Required if configurationType is \&#39;static\&#39;. Each key must be in RSA or ECDSA format and properly PEM-encoded with BEGIN/END markers. | [default to undefined]
**boundIssuer** | **string** | The unique identifier of the JWT provider. | [optional] [default to '']
**boundAudiences** | **string** | The list of intended recipients. | [optional] [default to '']
**boundClaims** | **{ [key: string]: string; }** | The attributes that should be present in the JWT for it to be valid. | [default to undefined]
**boundSubject** | **string** | The expected principal that is the subject of the JWT. | [optional] [default to '']
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenMaxTTL** | **number** | The maximum lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenNumUsesLimit** | **number** | The maximum number of times that an access token can be used. | [optional] [default to 0]

## Example

```typescript
import { ApiV1AuthJwtAuthIdentitiesIdentityIdPostRequest } from './api';

const instance: ApiV1AuthJwtAuthIdentitiesIdentityIdPostRequest = {
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
