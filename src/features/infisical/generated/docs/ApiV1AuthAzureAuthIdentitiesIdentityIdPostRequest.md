# ApiV1AuthAzureAuthIdentitiesIdentityIdPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** | The tenant ID for the Azure AD organization. | [default to undefined]
**resource** | **string** | The resource URL for the application registered in Azure AD. | [default to undefined]
**allowedServicePrincipalIds** | **string** | The comma-separated list of Azure AD service principal IDs that are allowed to authenticate with Infisical. | [optional] [default to '']
**accessTokenTrustedIps** | [**Array&lt;ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner&gt;**](ApiV1AuthTokenAuthIdentitiesIdentityIdPostRequestAccessTokenTrustedIpsInner.md) | The IPs or CIDR ranges that access tokens can be used from. | [optional] [default to undefined]
**accessTokenTTL** | **number** | The lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenMaxTTL** | **number** | The maximum lifetime for an access token in seconds. | [optional] [default to 2592000]
**accessTokenNumUsesLimit** | **number** | The maximum number of times that an access token can be used. | [optional] [default to 0]

## Example

```typescript
import { ApiV1AuthAzureAuthIdentitiesIdentityIdPostRequest } from './api';

const instance: ApiV1AuthAzureAuthIdentitiesIdentityIdPostRequest = {
    tenantId,
    resource,
    allowedServicePrincipalIds,
    accessTokenTrustedIps,
    accessTokenTTL,
    accessTokenMaxTTL,
    accessTokenNumUsesLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
