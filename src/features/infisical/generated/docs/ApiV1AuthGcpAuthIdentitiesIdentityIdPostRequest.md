# ApiV1AuthGcpAuthIdentitiesIdentityIdPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**allowedServiceAccounts** | **string** | The comma-separated list of trusted service account emails corresponding to the GCE resource(s) allowed to authenticate with Infisical. | [optional] [default to '']
**allowedProjects** | **string** | The comma-separated list of trusted GCP projects that the GCE instance must belong to authenticate with Infisical. | [optional] [default to '']
**allowedZones** | **string** | The comma-separated list of trusted zones that the GCE instances must belong to authenticate with Infisical. | [optional] [default to '']
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenMaxTTL** | **number** | The maximum lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenNumUsesLimit** | **number** | The maximum number of times that an access token can be used. | [optional] [default to 0]

## Example

```typescript
import { ApiV1AuthGcpAuthIdentitiesIdentityIdPostRequest } from './api';

const instance: ApiV1AuthGcpAuthIdentitiesIdentityIdPostRequest = {
    type,
    allowedServiceAccounts,
    allowedProjects,
    allowedZones,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenMaxTTL,
    accessTokenNumUsesLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
