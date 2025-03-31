# ApiV1DynamicSecretsLeasesLeaseIdRenewPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ttl** | **string** | The renew TTL that gets added with current expiry (ensure it\&#39;s below max TTL) for a total less than creation time + max TTL. | [optional] [default to undefined]
**projectSlug** | **string** | The slug of the project of the dynamic secret in. | [default to undefined]
**path** | **string** | The path of the dynamic secret in. | [optional] [default to '/']
**environmentSlug** | **string** | The slug of the environment of the dynamic secret in. | [default to undefined]

## Example

```typescript
import { ApiV1DynamicSecretsLeasesLeaseIdRenewPostRequest } from './api';

const instance: ApiV1DynamicSecretsLeasesLeaseIdRenewPostRequest = {
    ttl,
    projectSlug,
    path,
    environmentSlug,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
