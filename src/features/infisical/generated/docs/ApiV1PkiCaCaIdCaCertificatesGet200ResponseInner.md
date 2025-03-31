# ApiV1PkiCaCaIdCaCertificatesGet200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **string** | The certificate body of the CA certificate. | [default to undefined]
**certificateChain** | **string** | The certificate chain of the CA certificate. | [default to undefined]
**serialNumber** | **string** | The serial number of the CA certificate. | [default to undefined]
**version** | **number** | The version of the CA certificate. The version is incremented for each CA renewal operation. | [default to undefined]

## Example

```typescript
import { ApiV1PkiCaCaIdCaCertificatesGet200ResponseInner } from './api';

const instance: ApiV1PkiCaCaIdCaCertificatesGet200ResponseInner = {
    certificate,
    certificateChain,
    serialNumber,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
