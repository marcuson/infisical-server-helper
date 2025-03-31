# ApiV1SsoOidcConfigPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedEmailDomains** | **string** |  | [optional] [default to '']
**configurationType** | **string** |  | [default to undefined]
**issuer** | **string** |  | [optional] [default to '']
**discoveryURL** | **string** |  | [optional] [default to '']
**authorizationEndpoint** | **string** |  | [optional] [default to '']
**jwksUri** | **string** |  | [optional] [default to '']
**tokenEndpoint** | **string** |  | [optional] [default to '']
**userinfoEndpoint** | **string** |  | [optional] [default to '']
**clientId** | **string** |  | [default to undefined]
**clientSecret** | **string** |  | [default to undefined]
**isActive** | **boolean** |  | [default to undefined]
**orgSlug** | **string** |  | [default to undefined]
**manageGroupMemberships** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { ApiV1SsoOidcConfigPostRequest } from './api';

const instance: ApiV1SsoOidcConfigPostRequest = {
    allowedEmailDomains,
    configurationType,
    issuer,
    discoveryURL,
    authorizationEndpoint,
    jwksUri,
    tokenEndpoint,
    userinfoEndpoint,
    clientId,
    clientSecret,
    isActive,
    orgSlug,
    manageGroupMemberships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
