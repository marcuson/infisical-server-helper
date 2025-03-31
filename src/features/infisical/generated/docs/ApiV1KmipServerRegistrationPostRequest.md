# ApiV1KmipServerRegistrationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostnamesOrIps** | **string** |  | [optional] [default to '']
**commonName** | **string** |  | [optional] [default to undefined]
**keyAlgorithm** | **string** |  | [optional] [default to KeyAlgorithmEnum_Rsa2048]
**ttl** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1KmipServerRegistrationPostRequest } from './api';

const instance: ApiV1KmipServerRegistrationPostRequest = {
    hostnamesOrIps,
    commonName,
    keyAlgorithm,
    ttl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
