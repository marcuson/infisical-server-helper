# ApiV2OrganizationsOrganizationIdMembershipsMembershipIdGet200ResponseMembership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**role** | **string** |  | [default to undefined]
**status** | **string** |  | [optional] [default to 'invited']
**inviteEmail** | **string** |  | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [default to undefined]
**roleId** | **string** |  | [optional] [default to undefined]
**projectFavorites** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to true]
**metadata** | [**Array&lt;ApiV1IdentitiesIdentityIdGet200ResponseIdentityMetadataInner&gt;**](ApiV1IdentitiesIdentityIdGet200ResponseIdentityMetadataInner.md) |  | [optional] [default to undefined]
**user** | [**ApiV2OrganizationsOrganizationIdMembershipsMembershipIdGet200ResponseMembershipUser**](ApiV2OrganizationsOrganizationIdMembershipsMembershipIdGet200ResponseMembershipUser.md) |  | [default to undefined]

## Example

```typescript
import { ApiV2OrganizationsOrganizationIdMembershipsMembershipIdGet200ResponseMembership } from './api';

const instance: ApiV2OrganizationsOrganizationIdMembershipsMembershipIdGet200ResponseMembership = {
    id,
    role,
    status,
    inviteEmail,
    userId,
    orgId,
    roleId,
    projectFavorites,
    isActive,
    metadata,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
