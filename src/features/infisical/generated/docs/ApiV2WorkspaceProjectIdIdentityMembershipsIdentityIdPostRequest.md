# ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** |  | [optional] [default to 'no-access']
**roles** | [**Array&lt;ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPostRequestRolesInner&gt;**](ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPostRequestRolesInner.md) | A list of role slugs to assign to the newly created identity project membership. | [optional] [default to undefined]

## Example

```typescript
import { ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPostRequest } from './api';

const instance: ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPostRequest = {
    role,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
