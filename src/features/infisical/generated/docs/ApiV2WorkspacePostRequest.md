# ApiV2WorkspacePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectName** | **string** | The name of the project to create. | [default to undefined]
**projectDescription** | **string** | An optional description label for the project. | [optional] [default to undefined]
**slug** | **string** | An optional slug for the project. | [optional] [default to undefined]
**kmsKeyId** | **string** |  | [optional] [default to undefined]
**template** | **string** | The name of the project template, if specified, to apply to this project. | [optional] [default to 'default']
**type** | **string** |  | [optional] [default to TypeEnum_SecretManager]

## Example

```typescript
import { ApiV2WorkspacePostRequest } from './api';

const instance: ApiV2WorkspacePostRequest = {
    projectName,
    projectDescription,
    slug,
    kmsKeyId,
    template,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
