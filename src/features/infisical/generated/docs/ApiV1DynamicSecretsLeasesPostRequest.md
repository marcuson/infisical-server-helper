# ApiV1DynamicSecretsLeasesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamicSecretName** | **string** | The name of the dynamic secret. | [default to undefined]
**projectSlug** | **string** | The slug of the project of the dynamic secret in. | [default to undefined]
**ttl** | **string** | The lease lifetime TTL. If not provided the default TTL of dynamic secret will be used. | [optional] [default to undefined]
**path** | **string** | The path of the dynamic secret in. | [optional] [default to '/']
**environmentSlug** | **string** | The path of the dynamic secret in. | [default to undefined]

## Example

```typescript
import { ApiV1DynamicSecretsLeasesPostRequest } from './api';

const instance: ApiV1DynamicSecretsLeasesPostRequest = {
    dynamicSecretName,
    projectSlug,
    ttl,
    path,
    environmentSlug,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
