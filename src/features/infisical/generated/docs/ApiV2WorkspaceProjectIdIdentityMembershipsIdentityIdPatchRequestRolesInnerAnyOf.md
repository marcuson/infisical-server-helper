# ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPatchRequestRolesInnerAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** | The role slug to assign to the newly created identity project membership. | [default to undefined]
**isTemporary** | **boolean** | Whether the assigned role is temporary. If isTemporary is set true, must provide temporaryMode, temporaryRange and temporaryAccessStartTime. | [optional] [default to false]

## Example

```typescript
import { ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPatchRequestRolesInnerAnyOf } from './api';

const instance: ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPatchRequestRolesInnerAnyOf = {
    role,
    isTemporary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
