# ApiV1AuthGcpAuthIdentitiesIdentityIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**allowedServiceAccounts** | **string** | The new comma-separated list of trusted service account emails corresponding to the GCE resource(s) allowed to authenticate with Infisical. | [optional] [default to '']
**allowedProjects** | **string** | The new comma-separated list of trusted GCP projects that the GCE instance must belong to authenticate with Infisical. | [optional] [default to '']
**allowedZones** | **string** | The new comma-separated list of trusted zones that the GCE instances must belong to authenticate with Infisical. | [optional] [default to '']
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The new IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The new lifetime for an access token in seconds. | [optional] [default to undefined]
**accessTokenNumUsesLimit** | **number** | The new maximum number of times that an access token can be used. | [optional] [default to undefined]
**accessTokenMaxTTL** | **number** | The new maximum lifetime for an access token in seconds. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AuthGcpAuthIdentitiesIdentityIdPatchRequest } from './api';

const instance: ApiV1AuthGcpAuthIdentitiesIdentityIdPatchRequest = {
    type,
    allowedServiceAccounts,
    allowedProjects,
    allowedZones,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenNumUsesLimit,
    accessTokenMaxTTL,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
