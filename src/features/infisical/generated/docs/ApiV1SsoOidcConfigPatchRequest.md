# ApiV1SsoOidcConfigPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedEmailDomains** | **string** |  | [optional] [default to '']
**discoveryURL** | **string** |  | [optional] [default to undefined]
**configurationType** | **string** |  | [optional] [default to undefined]
**issuer** | **string** |  | [optional] [default to undefined]
**authorizationEndpoint** | **string** |  | [optional] [default to undefined]
**jwksUri** | **string** |  | [optional] [default to undefined]
**tokenEndpoint** | **string** |  | [optional] [default to undefined]
**userinfoEndpoint** | **string** |  | [optional] [default to undefined]
**clientId** | **string** |  | [optional] [default to undefined]
**clientSecret** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**manageGroupMemberships** | **boolean** |  | [optional] [default to undefined]
**orgSlug** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1SsoOidcConfigPatchRequest } from './api';

const instance: ApiV1SsoOidcConfigPatchRequest = {
    allowedEmailDomains,
    discoveryURL,
    configurationType,
    issuer,
    authorizationEndpoint,
    jwksUri,
    tokenEndpoint,
    userinfoEndpoint,
    clientId,
    clientSecret,
    isActive,
    manageGroupMemberships,
    orgSlug,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
