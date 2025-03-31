# ApiV1AuthKubernetesAuthIdentitiesIdentityIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kubernetesHost** | **string** | The new host string, host:port pair, or URL to the base of the Kubernetes API server. | [optional] [default to undefined]
**caCert** | **string** | The new PEM-encoded CA cert for the Kubernetes API server. | [optional] [default to undefined]
**tokenReviewerJwt** | **string** | Optional JWT token for accessing Kubernetes TokenReview API. If provided, this long-lived token will be used to validate service account tokens during authentication. If omitted, the client\&#39;s own JWT will be used instead, which requires the client to have the system:auth-delegator ClusterRole binding. | [optional] [default to undefined]
**allowedNamespaces** | **string** | The new comma-separated list of trusted namespaces that service accounts must belong to authenticate with Infisical. | [optional] [default to undefined]
**allowedNames** | **string** | The new comma-separated list of trusted service account names that can authenticate with Infisical. | [optional] [default to undefined]
**allowedAudience** | **string** | The new optional audience claim that the service account JWT token must have to authenticate with Infisical. | [optional] [default to undefined]
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The new IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The new lifetime for an acccess token in seconds. | [optional] [default to undefined]
**accessTokenNumUsesLimit** | **number** | The new maximum number of times that an access token can be used. | [optional] [default to undefined]
**accessTokenMaxTTL** | **number** | The new maximum lifetime for an acccess token in seconds. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AuthKubernetesAuthIdentitiesIdentityIdPatchRequest } from './api';

const instance: ApiV1AuthKubernetesAuthIdentitiesIdentityIdPatchRequest = {
    kubernetesHost,
    caCert,
    tokenReviewerJwt,
    allowedNamespaces,
    allowedNames,
    allowedAudience,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenNumUsesLimit,
    accessTokenMaxTTL,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
