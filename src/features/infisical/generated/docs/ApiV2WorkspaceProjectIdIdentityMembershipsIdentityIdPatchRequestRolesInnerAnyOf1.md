# ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPatchRequestRolesInnerAnyOf1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** | The role slug to assign to the newly created identity project membership. | [default to undefined]
**isTemporary** | **boolean** | Whether the assigned role is temporary. If isTemporary is set true, must provide temporaryMode, temporaryRange and temporaryAccessStartTime. | [default to undefined]
**temporaryMode** | **string** | Type of temporary expiry. | [default to undefined]
**temporaryRange** | **string** | Expiry time for temporary access. In relative mode it could be 1s, 2m ,3h, etc. | [default to undefined]
**temporaryAccessStartTime** | **string** | Time to which the temporary access starts. | [default to undefined]

## Example

```typescript
import { ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPatchRequestRolesInnerAnyOf1 } from './api';

const instance: ApiV2WorkspaceProjectIdIdentityMembershipsIdentityIdPatchRequestRolesInnerAnyOf1 = {
    role,
    isTemporary,
    temporaryMode,
    temporaryRange,
    temporaryAccessStartTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
