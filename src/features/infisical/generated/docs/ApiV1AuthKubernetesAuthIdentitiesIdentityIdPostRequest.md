# ApiV1AuthKubernetesAuthIdentitiesIdentityIdPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kubernetesHost** | **string** | The host string, host:port pair, or URL to the base of the Kubernetes API server. | [default to undefined]
**caCert** | **string** | The PEM-encoded CA cert for the Kubernetes API server. | [optional] [default to '']
**tokenReviewerJwt** | **string** | Optional JWT token for accessing Kubernetes TokenReview API. If provided, this long-lived token will be used to validate service account tokens during authentication. If omitted, the client\&#39;s own JWT will be used instead, which requires the client to have the system:auth-delegator ClusterRole binding. | [optional] [default to undefined]
**allowedNamespaces** | **string** | The comma-separated list of trusted namespaces that service accounts must belong to authenticate with Infisical. | [default to undefined]
**allowedNames** | **string** | The comma-separated list of trusted service account names that can authenticate with Infisical. | [default to undefined]
**allowedAudience** | **string** | The optional audience claim that the service account JWT token must have to authenticate with Infisical. | [default to undefined]
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenMaxTTL** | **number** | The maximum lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenNumUsesLimit** | **number** | The maximum number of times that an access token can be used. | [optional] [default to 0]

## Example

```typescript
import { ApiV1AuthKubernetesAuthIdentitiesIdentityIdPostRequest } from './api';

const instance: ApiV1AuthKubernetesAuthIdentitiesIdentityIdPostRequest = {
    kubernetesHost,
    caCert,
    tokenReviewerJwt,
    allowedNamespaces,
    allowedNames,
    allowedAudience,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenMaxTTL,
    accessTokenNumUsesLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
