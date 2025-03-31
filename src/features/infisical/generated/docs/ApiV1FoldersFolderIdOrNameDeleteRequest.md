# ApiV1FoldersFolderIdOrNameDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project to delete the folder from. | [default to undefined]
**environment** | **string** | The slug of the environment where the folder is located. | [default to undefined]
**path** | **string** | The path of the folder to delete. | [optional] [default to '/']
**directory** | **string** | The directory of the folder to delete. (Deprecated in favor of path) | [optional] [default to '/']

## Example

```typescript
import { ApiV1FoldersFolderIdOrNameDeleteRequest } from './api';

const instance: ApiV1FoldersFolderIdOrNameDeleteRequest = {
    workspaceId,
    environment,
    path,
    directory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
