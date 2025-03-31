# ApiV1AdminConfigPatch200ResponseConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**initialized** | **boolean** |  | [optional] [default to false]
**allowSignUp** | **boolean** |  | [optional] [default to true]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**allowedSignUpDomain** | **string** |  | [optional] [default to undefined]
**instanceId** | **string** |  | [optional] [default to '00000000-0000-0000-0000-000000000000']
**trustSamlEmails** | **boolean** |  | [optional] [default to false]
**trustLdapEmails** | **boolean** |  | [optional] [default to false]
**trustOidcEmails** | **boolean** |  | [optional] [default to false]
**defaultAuthOrgId** | **string** |  | [optional] [default to undefined]
**enabledLoginMethods** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**encryptedSlackClientId** | **any** |  | [optional] [default to undefined]
**encryptedSlackClientSecret** | **any** |  | [optional] [default to undefined]
**authConsentContent** | **string** |  | [optional] [default to undefined]
**pageFrameContent** | **string** |  | [optional] [default to undefined]
**adminIdentityIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**defaultAuthOrgSlug** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1AdminConfigPatch200ResponseConfig } from './api';

const instance: ApiV1AdminConfigPatch200ResponseConfig = {
    id,
    initialized,
    allowSignUp,
    createdAt,
    updatedAt,
    allowedSignUpDomain,
    instanceId,
    trustSamlEmails,
    trustLdapEmails,
    trustOidcEmails,
    defaultAuthOrgId,
    enabledLoginMethods,
    encryptedSlackClientId,
    encryptedSlackClientSecret,
    authConsentContent,
    pageFrameContent,
    adminIdentityIds,
    defaultAuthOrgSlug,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
