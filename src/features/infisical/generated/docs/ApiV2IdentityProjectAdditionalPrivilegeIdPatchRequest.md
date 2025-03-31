# ApiV2IdentityProjectAdditionalPrivilegeIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **string** | The slug of the privilege to update. | [default to undefined]
**permissions** | [**Array&lt;ApiV1UserProjectAdditionalPrivilegePostRequestPermissionsInner&gt;**](ApiV1UserProjectAdditionalPrivilegePostRequestPermissionsInner.md) | The permission for the privilege. | [default to undefined]
**type** | [**ApiV2IdentityProjectAdditionalPrivilegeIdPatchRequestType**](ApiV2IdentityProjectAdditionalPrivilegeIdPatchRequestType.md) |  | [default to undefined]

## Example

```typescript
import { ApiV2IdentityProjectAdditionalPrivilegeIdPatchRequest } from './api';

const instance: ApiV2IdentityProjectAdditionalPrivilegeIdPatchRequest = {
    slug,
    permissions,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
