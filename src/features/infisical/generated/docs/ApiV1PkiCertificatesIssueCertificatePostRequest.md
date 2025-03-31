# ApiV1PkiCertificatesIssueCertificatePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caId** | **string** | The ID of the CA to issue the certificate from. | [optional] [default to undefined]
**certificateTemplateId** | **string** | The ID of the certificate template to issue the certificate from. | [optional] [default to undefined]
**pkiCollectionId** | **string** | The ID of the PKI collection to add the certificate to. | [optional] [default to undefined]
**friendlyName** | **string** | A friendly name for the certificate. | [optional] [default to undefined]
**commonName** | **string** | The common name (CN) for the certificate. | [default to undefined]
**altNames** | **string** | A comma-delimited list of Subject Alternative Names (SANs) for the certificate; these can be host names or email addresses. | [optional] [default to '']
**ttl** | **string** | The time to live for the certificate such as 1m, 1h, 1d, 1y, ... | [default to undefined]
**notBefore** | **string** | The date and time when the certificate becomes valid in YYYY-MM-DDTHH:mm:ss.sssZ format. | [optional] [default to undefined]
**notAfter** | **string** | The date and time when the certificate expires in YYYY-MM-DDTHH:mm:ss.sssZ format. | [optional] [default to undefined]
**keyUsages** | **Array&lt;string&gt;** | The key usage extension of the certificate. | [optional] [default to undefined]
**extendedKeyUsages** | **Array&lt;string&gt;** | The extended key usage extension of the certificate. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1PkiCertificatesIssueCertificatePostRequest } from './api';

const instance: ApiV1PkiCertificatesIssueCertificatePostRequest = {
    caId,
    certificateTemplateId,
    pkiCollectionId,
    friendlyName,
    commonName,
    altNames,
    ttl,
    notBefore,
    notAfter,
    keyUsages,
    extendedKeyUsages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
