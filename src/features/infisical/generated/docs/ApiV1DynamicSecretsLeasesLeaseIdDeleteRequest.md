# ApiV1DynamicSecretsLeasesLeaseIdDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** | The slug of the project of the dynamic secret in. | [default to undefined]
**path** | **string** | The path of the dynamic secret in. | [optional] [default to '/']
**environmentSlug** | **string** | The slug of the environment of the dynamic secret in. | [default to undefined]
**isForced** | **boolean** | A boolean flag to delete the the dynamic secret from Infisical without trying to remove it from external provider. Used when the dynamic secret got modified externally. | [optional] [default to false]

## Example

```typescript
import { ApiV1DynamicSecretsLeasesLeaseIdDeleteRequest } from './api';

const instance: ApiV1DynamicSecretsLeasesLeaseIdDeleteRequest = {
    projectSlug,
    path,
    environmentSlug,
    isForced,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
