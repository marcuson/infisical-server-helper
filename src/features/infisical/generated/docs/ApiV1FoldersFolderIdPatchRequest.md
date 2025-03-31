# ApiV1FoldersFolderIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project where the folder is located. | [default to undefined]
**environment** | **string** | The slug of the environment where the folder is located. | [default to undefined]
**name** | **string** | The new name of the folder. | [default to undefined]
**path** | **string** | The path of the folder to update. | [optional] [default to '/']
**directory** | **string** | The new directory of the folder to update. (Deprecated in favor of path) | [optional] [default to '/']
**description** | **string** | An optional description label for the folder. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1FoldersFolderIdPatchRequest } from './api';

const instance: ApiV1FoldersFolderIdPatchRequest = {
    workspaceId,
    environment,
    name,
    path,
    directory,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
