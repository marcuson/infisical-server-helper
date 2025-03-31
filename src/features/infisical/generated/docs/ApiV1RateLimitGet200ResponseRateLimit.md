# ApiV1RateLimitGet200ResponseRateLimit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**readRateLimit** | **number** |  | [optional] [default to 600]
**writeRateLimit** | **number** |  | [optional] [default to 200]
**secretsRateLimit** | **number** |  | [optional] [default to 60]
**authRateLimit** | **number** |  | [optional] [default to 60]
**inviteUserRateLimit** | **number** |  | [optional] [default to 30]
**mfaRateLimit** | **number** |  | [optional] [default to 20]
**publicEndpointLimit** | **number** |  | [optional] [default to 30]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1RateLimitGet200ResponseRateLimit } from './api';

const instance: ApiV1RateLimitGet200ResponseRateLimit = {
    id,
    readRateLimit,
    writeRateLimit,
    secretsRateLimit,
    authRateLimit,
    inviteUserRateLimit,
    mfaRateLimit,
    publicEndpointLimit,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
