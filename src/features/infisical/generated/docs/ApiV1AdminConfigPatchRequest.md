# ApiV1AdminConfigPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowSignUp** | **boolean** |  | [optional] [default to undefined]
**allowedSignUpDomain** | **string** |  | [optional] [default to undefined]
**trustSamlEmails** | **boolean** |  | [optional] [default to undefined]
**trustLdapEmails** | **boolean** |  | [optional] [default to undefined]
**trustOidcEmails** | **boolean** |  | [optional] [default to undefined]
**defaultAuthOrgId** | **string** |  | [optional] [default to undefined]
**enabledLoginMethods** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**slackClientId** | **string** |  | [optional] [default to undefined]
**slackClientSecret** | **string** |  | [optional] [default to undefined]
**authConsentContent** | **string** |  | [optional] [default to undefined]
**pageFrameContent** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AdminConfigPatchRequest } from './api';

const instance: ApiV1AdminConfigPatchRequest = {
    allowSignUp,
    allowedSignUpDomain,
    trustSamlEmails,
    trustLdapEmails,
    trustOidcEmails,
    defaultAuthOrgId,
    enabledLoginMethods,
    slackClientId,
    slackClientSecret,
    authConsentContent,
    pageFrameContent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
