# ApiV1OrganizationOrganizationIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**authEnforced** | **boolean** |  | [optional] [default to undefined]
**scimEnabled** | **boolean** |  | [optional] [default to undefined]
**defaultMembershipRoleSlug** | **string** |  | [optional] [default to undefined]
**enforceMfa** | **boolean** |  | [optional] [default to undefined]
**selectedMfaMethod** | **string** |  | [optional] [default to undefined]
**allowSecretSharingOutsideOrganization** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1OrganizationOrganizationIdPatchRequest } from './api';

const instance: ApiV1OrganizationOrganizationIdPatchRequest = {
    name,
    slug,
    authEnforced,
    scimEnabled,
    defaultMembershipRoleSlug,
    enforceMfa,
    selectedMfaMethod,
    allowSecretSharingOutsideOrganization,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
