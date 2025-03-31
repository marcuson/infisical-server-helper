# ApiV1WorkspaceWorkspaceIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The new name of the project. | [optional] [default to undefined]
**description** | **string** | An optional description label for the project. | [optional] [default to undefined]
**autoCapitalization** | **boolean** | Disable or enable auto-capitalization for the project. | [optional] [default to undefined]
**slug** | **string** | An optional slug for the project. (must be unique within the organization) | [optional] [default to undefined]

## Example

```typescript
import { ApiV1WorkspaceWorkspaceIdPatchRequest } from './api';

const instance: ApiV1WorkspaceWorkspaceIdPatchRequest = {
    name,
    description,
    autoCapitalization,
    slug,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
