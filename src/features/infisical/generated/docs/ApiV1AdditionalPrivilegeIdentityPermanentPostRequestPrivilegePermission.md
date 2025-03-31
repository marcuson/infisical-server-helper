# ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermission

The permission object for the privilege.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **Array&lt;string&gt;** | Describe what action an entity can take. Possible actions: create, edit, delete, and read | [default to undefined]
**subject** | **string** | The entity this permission pertains to. Possible options: secrets, environments | [default to undefined]
**conditions** | [**ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermissionConditions**](ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermissionConditions.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermission } from './api';

const instance: ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermission = {
    actions,
    subject,
    conditions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
