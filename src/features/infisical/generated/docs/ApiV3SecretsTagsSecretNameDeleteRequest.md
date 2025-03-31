# ApiV3SecretsTagsSecretNameDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** | The slug of the project where the secret is located. | [default to undefined]
**environment** | **string** | The slug of the environment where the secret is located. | [default to undefined]
**secretPath** | **string** | The path of the secret to detach tags from. | [optional] [default to '/']
**type** | **string** | The type of the secret to attach tags to. (shared/personal) | [optional] [default to TypeEnum_Shared]
**tagSlugs** | **Array&lt;string&gt;** | An array of existing tag slugs to detach from the secret. | [default to undefined]

## Example

```typescript
import { ApiV3SecretsTagsSecretNameDeleteRequest } from './api';

const instance: ApiV3SecretsTagsSecretNameDeleteRequest = {
    projectSlug,
    environment,
    secretPath,
    type,
    tagSlugs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
