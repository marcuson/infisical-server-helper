# ApiV1SsoOidcConfigGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**issuer** | **string** |  | [optional] [default to undefined]
**authorizationEndpoint** | **string** |  | [optional] [default to undefined]
**jwksUri** | **string** |  | [optional] [default to undefined]
**tokenEndpoint** | **string** |  | [optional] [default to undefined]
**userinfoEndpoint** | **string** |  | [optional] [default to undefined]
**configurationType** | **string** |  | [default to undefined]
**discoveryURL** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [default to undefined]
**orgId** | **string** |  | [default to undefined]
**allowedEmailDomains** | **string** |  | [optional] [default to undefined]
**manageGroupMemberships** | **boolean** |  | [optional] [default to false]
**clientId** | **string** |  | [default to undefined]
**clientSecret** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1SsoOidcConfigGet200Response } from './api';

const instance: ApiV1SsoOidcConfigGet200Response = {
    id,
    issuer,
    authorizationEndpoint,
    jwksUri,
    tokenEndpoint,
    userinfoEndpoint,
    configurationType,
    discoveryURL,
    isActive,
    orgId,
    allowedEmailDomains,
    manageGroupMemberships,
    clientId,
    clientSecret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
