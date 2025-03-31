# ApiV1WorkspaceWorkspaceIdEnvironmentsIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **string** | The new slug of the environment. | [optional] [default to undefined]
**name** | **string** | The new name of the environment. | [optional] [default to undefined]
**position** | **number** | The new position of the environment. The lowest number will be displayed as the first environment. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1WorkspaceWorkspaceIdEnvironmentsIdPatchRequest } from './api';

const instance: ApiV1WorkspaceWorkspaceIdEnvironmentsIdPatchRequest = {
    slug,
    name,
    position,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
