# ApiV1WorkspaceProjectSlugRolesRoleIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **string** | The slug of the role. | [optional] [default to undefined]
**name** | **string** | The name of the role. | [optional] [default to undefined]
**description** | **string** | The description for the role. | [optional] [default to undefined]
**permissions** | [**Array&lt;ApiV1WorkspaceProjectSlugRolesPostRequestPermissionsInner&gt;**](ApiV1WorkspaceProjectSlugRolesPostRequestPermissionsInner.md) | The permissions assigned to the role. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1WorkspaceProjectSlugRolesRoleIdPatchRequest } from './api';

const instance: ApiV1WorkspaceProjectSlugRolesRoleIdPatchRequest = {
    slug,
    name,
    description,
    permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
