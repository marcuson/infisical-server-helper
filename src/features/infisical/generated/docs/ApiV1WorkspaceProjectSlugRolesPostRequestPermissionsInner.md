# ApiV1WorkspaceProjectSlugRolesPostRequestPermissionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **string** | The entity this permission pertains to. | [default to undefined]
**inverted** | **boolean** | Whether rule allows or forbids. | [optional] [default to undefined]
**action** | [**ApiV1WorkspaceProjectSlugRolesPostRequestPermissionsInnerAnyOf29Action**](ApiV1WorkspaceProjectSlugRolesPostRequestPermissionsInnerAnyOf29Action.md) |  | [default to undefined]
**conditions** | [**ApiV1WorkspaceProjectSlugRolesPostRequestPermissionsInnerAnyOfConditions**](ApiV1WorkspaceProjectSlugRolesPostRequestPermissionsInnerAnyOfConditions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1WorkspaceProjectSlugRolesPostRequestPermissionsInner } from './api';

const instance: ApiV1WorkspaceProjectSlugRolesPostRequestPermissionsInner = {
    subject,
    inverted,
    action,
    conditions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
