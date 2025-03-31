# ApiV1OrganizationGet200ResponseOrganizationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**customerId** | **string** |  | [optional] [default to undefined]
**slug** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**authEnforced** | **boolean** |  | [optional] [default to false]
**scimEnabled** | **boolean** |  | [optional] [default to false]
**kmsDefaultKeyId** | **string** |  | [optional] [default to undefined]
**defaultMembershipRole** | **string** |  | [optional] [default to 'member']
**enforceMfa** | **boolean** |  | [optional] [default to false]
**selectedMfaMethod** | **string** |  | [optional] [default to undefined]
**allowSecretSharingOutsideOrganization** | **boolean** |  | [optional] [default to true]
**shouldUseNewPrivilegeSystem** | **boolean** |  | [optional] [default to true]
**privilegeUpgradeInitiatedByUsername** | **string** |  | [optional] [default to undefined]
**privilegeUpgradeInitiatedAt** | **string** |  | [optional] [default to undefined]
**orgAuthMethod** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1OrganizationGet200ResponseOrganizationsInner } from './api';

const instance: ApiV1OrganizationGet200ResponseOrganizationsInner = {
    id,
    name,
    customerId,
    slug,
    createdAt,
    updatedAt,
    authEnforced,
    scimEnabled,
    kmsDefaultKeyId,
    defaultMembershipRole,
    enforceMfa,
    selectedMfaMethod,
    allowSecretSharingOutsideOrganization,
    shouldUseNewPrivilegeSystem,
    privilegeUpgradeInitiatedByUsername,
    privilegeUpgradeInitiatedAt,
    orgAuthMethod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
