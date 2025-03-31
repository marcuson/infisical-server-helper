# ApiV1SshCertificatesIssuePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serialNumber** | **string** | The serial number of the issued SSH certificate. | [default to undefined]
**signedKey** | **string** | The SSH certificate or signed SSH public key. | [default to undefined]
**privateKey** | **string** | The private key corresponding to the issued SSH certificate. | [default to undefined]
**publicKey** | **string** | The public key of the issued SSH certificate. | [default to undefined]
**keyAlgorithm** | **string** | The type of public key algorithm and size, in bits, of the key pair for the SSH CA. | [default to undefined]

## Example

```typescript
import { ApiV1SshCertificatesIssuePost200Response } from './api';

const instance: ApiV1SshCertificatesIssuePost200Response = {
    serialNumber,
    signedKey,
    privateKey,
    publicKey,
    keyAlgorithm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
