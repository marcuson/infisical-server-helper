# ApiV1DynamicSecretsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** | The slug of the project to create dynamic secret in. | [default to undefined]
**provider** | [**ApiV1DynamicSecretsPostRequestProvider**](ApiV1DynamicSecretsPostRequestProvider.md) |  | [default to undefined]
**defaultTTL** | **string** | The default TTL that will be applied for all the leases. | [default to undefined]
**maxTTL** | **string** | The maximum limit a TTL can be leases or renewed. | [optional] [default to undefined]
**path** | **string** | The path to create the dynamic secret in. | [optional] [default to '/']
**environmentSlug** | **string** | The slug of the environment to create the dynamic secret in. | [default to undefined]
**name** | **string** | The name of the dynamic secret. | [default to undefined]

## Example

```typescript
import { ApiV1DynamicSecretsPostRequest } from './api';

const instance: ApiV1DynamicSecretsPostRequest = {
    projectSlug,
    provider,
    defaultTTL,
    maxTTL,
    path,
    environmentSlug,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
