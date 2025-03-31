# ApiV1FoldersPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project to create the folder in. | [default to undefined]
**environment** | **string** | The slug of the environment to create the folder in. | [default to undefined]
**name** | **string** | The name of the folder to create. | [default to undefined]
**path** | **string** | The path of the folder to create. | [optional] [default to '/']
**directory** | **string** | The directory of the folder to create. (Deprecated in favor of path) | [optional] [default to '/']
**description** | **string** | An optional description label for the folder. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1FoldersPostRequest } from './api';

const instance: ApiV1FoldersPostRequest = {
    workspaceId,
    environment,
    name,
    path,
    directory,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
