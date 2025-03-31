# ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Describe what action an entity can take. Possible actions: create, edit, delete, and read | [default to undefined]
**subject** | **string** | The entity this permission pertains to. Possible options: secrets, environments | [default to undefined]
**conditions** | [**ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInnerConditions**](ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInnerConditions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInner } from './api';

const instance: ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInner = {
    action,
    subject,
    conditions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
