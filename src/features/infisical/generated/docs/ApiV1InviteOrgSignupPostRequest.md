# ApiV1InviteOrgSignupPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inviteeEmails** | **Array&lt;string&gt;** |  | [default to undefined]
**organizationId** | **string** |  | [default to undefined]
**projects** | [**Array&lt;ApiV1InviteOrgSignupPostRequestProjectsInner&gt;**](ApiV1InviteOrgSignupPostRequestProjectsInner.md) |  | [optional] [default to undefined]
**organizationRoleSlug** | **string** |  | [optional] [default to 'member']

## Example

```typescript
import { ApiV1InviteOrgSignupPostRequest } from './api';

const instance: ApiV1InviteOrgSignupPostRequest = {
    inviteeEmails,
    organizationId,
    projects,
    organizationRoleSlug,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
