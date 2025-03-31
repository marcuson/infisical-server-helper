# ApiV1FoldersBatchPatchRequestFoldersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the folder to update. | [default to undefined]
**environment** | **string** | The slug of the environment where the folder is located. | [default to undefined]
**name** | **string** | The new name of the folder. | [default to undefined]
**path** | **string** | The path of the folder to update. | [optional] [default to '/']
**description** | **string** | An optional description label for the folder. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1FoldersBatchPatchRequestFoldersInner } from './api';

const instance: ApiV1FoldersBatchPatchRequestFoldersInner = {
    id,
    environment,
    name,
    path,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
