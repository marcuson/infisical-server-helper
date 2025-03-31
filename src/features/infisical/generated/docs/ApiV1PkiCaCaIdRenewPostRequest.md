# ApiV1PkiCaCaIdRenewPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of behavior to use for the renewal operation. Currently Infisical is only able to renew a CA certificate with the same key pair. | [default to undefined]
**notAfter** | **string** | The expiry date and time for the renewed CA certificate in YYYY-MM-DDTHH:mm:ss.sssZ format. | [default to undefined]

## Example

```typescript
import { ApiV1PkiCaCaIdRenewPostRequest } from './api';

const instance: ApiV1PkiCaCaIdRenewPostRequest = {
    type,
    notAfter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
