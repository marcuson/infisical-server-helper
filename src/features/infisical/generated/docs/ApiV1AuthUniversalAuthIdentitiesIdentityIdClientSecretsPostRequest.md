# ApiV1AuthUniversalAuthIdentitiesIdentityIdClientSecretsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | The description of the client secret. | [optional] [default to '']
**numUsesLimit** | **number** | The maximum number of times that the client secret can be used; a value of 0 implies infinite number of uses. | [optional] [default to 0]
**ttl** | **number** | The lifetime for the client secret in seconds. | [optional] [default to 0]

## Example

```typescript
import { ApiV1AuthUniversalAuthIdentitiesIdentityIdClientSecretsPostRequest } from './api';

const instance: ApiV1AuthUniversalAuthIdentitiesIdentityIdClientSecretsPostRequest = {
    description,
    numUsesLimit,
    ttl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
