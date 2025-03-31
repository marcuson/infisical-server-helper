# ApiV1PkiCaCaIdSignIntermediatePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csr** | **string** | The pem-encoded CSR to sign with the CA. | [default to undefined]
**notBefore** | **string** | The date and time when the intermediate CA becomes valid in YYYY-MM-DDTHH:mm:ss.sssZ format. | [optional] [default to undefined]
**notAfter** | **string** | The date and time when the intermediate CA expires in YYYY-MM-DDTHH:mm:ss.sssZ format. | [default to undefined]
**maxPathLength** | **number** | The maximum number of intermediate CAs that may follow this CA in the certificate / CA chain. A maxPathLength of -1 implies no path limit on the chain. | [optional] [default to -1]

## Example

```typescript
import { ApiV1PkiCaCaIdSignIntermediatePostRequest } from './api';

const instance: ApiV1PkiCaCaIdSignIntermediatePostRequest = {
    csr,
    notBefore,
    notAfter,
    maxPathLength,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
