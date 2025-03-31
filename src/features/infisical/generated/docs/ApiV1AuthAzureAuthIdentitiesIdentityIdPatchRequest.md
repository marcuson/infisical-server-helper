# ApiV1AuthAzureAuthIdentitiesIdentityIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** | The new tenant ID for the Azure AD organization. | [optional] [default to undefined]
**resource** | **string** | The new resource URL for the application registered in Azure AD. | [optional] [default to undefined]
**allowedServicePrincipalIds** | **string** | The new comma-separated list of Azure AD service principal IDs that are allowed to authenticate with Infisical. | [optional] [default to '']
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The new IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The new lifetime for an access token in seconds. | [optional] [default to undefined]
**accessTokenNumUsesLimit** | **number** | The new maximum number of times that an access token can be used. | [optional] [default to undefined]
**accessTokenMaxTTL** | **number** | The new maximum lifetime for an access token in seconds. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AuthAzureAuthIdentitiesIdentityIdPatchRequest } from './api';

const instance: ApiV1AuthAzureAuthIdentitiesIdentityIdPatchRequest = {
    tenantId,
    resource,
    allowedServicePrincipalIds,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenNumUsesLimit,
    accessTokenMaxTTL,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
