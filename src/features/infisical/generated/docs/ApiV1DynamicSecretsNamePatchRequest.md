# ApiV1DynamicSecretsNamePatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** | The slug of the project to update dynamic secret in. | [default to undefined]
**path** | **string** | The path to update the dynamic secret in. | [optional] [default to '/']
**environmentSlug** | **string** | The slug of the environment to update the dynamic secret in. | [default to undefined]
**data** | [**ApiV1DynamicSecretsNamePatchRequestData**](ApiV1DynamicSecretsNamePatchRequestData.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1DynamicSecretsNamePatchRequest } from './api';

const instance: ApiV1DynamicSecretsNamePatchRequest = {
    projectSlug,
    path,
    environmentSlug,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
