# ApiV2WorkspaceProjectIdGroupsGroupIdOrNamePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** | The role for the group to assume in the project. | [optional] [default to 'no-access']
**roles** | [**Array&lt;ApiV1WorkspaceWorkspaceIdMembershipsMembershipIdPatchRequestRolesInner&gt;**](ApiV1WorkspaceWorkspaceIdMembershipsMembershipIdPatchRequestRolesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV2WorkspaceProjectIdGroupsGroupIdOrNamePostRequest } from './api';

const instance: ApiV2WorkspaceProjectIdGroupsGroupIdOrNamePostRequest = {
    role,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
