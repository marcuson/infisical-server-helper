# ApiV1SsoOidcConfigPatch200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**issuer** | **string** |  | [optional] [default to undefined]
**authorizationEndpoint** | **string** |  | [optional] [default to undefined]
**configurationType** | **string** |  | [default to undefined]
**discoveryURL** | **string** |  | [optional] [default to undefined]
**jwksUri** | **string** |  | [optional] [default to undefined]
**tokenEndpoint** | **string** |  | [optional] [default to undefined]
**userinfoEndpoint** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [default to undefined]
**allowedEmailDomains** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [default to undefined]
**manageGroupMemberships** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { ApiV1SsoOidcConfigPatch200Response } from './api';

const instance: ApiV1SsoOidcConfigPatch200Response = {
    id,
    issuer,
    authorizationEndpoint,
    configurationType,
    discoveryURL,
    jwksUri,
    tokenEndpoint,
    userinfoEndpoint,
    orgId,
    allowedEmailDomains,
    isActive,
    manageGroupMemberships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
