# ApiV1PkiCertificateTemplatesCertificateTemplateIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caId** | **string** | The ID of the certificate authority to update the association with the template. | [optional] [default to undefined]
**pkiCollectionId** | **string** | The ID of the PKI collection to update the binding to the template. | [optional] [default to undefined]
**name** | **string** | The updated name of the template. | [optional] [default to undefined]
**commonName** | **string** | The updated regular expression string for validating common names. | [optional] [default to undefined]
**subjectAlternativeName** | **string** | The updated regular expression string for validating subject alternative names. | [optional] [default to undefined]
**ttl** | **string** | The updated max TTL for the template. | [optional] [default to undefined]
**keyUsages** | **Array&lt;string&gt;** | The updated key usage constraint or default value for when template is used during certificate issuance. | [optional] [default to undefined]
**extendedKeyUsages** | **Array&lt;string&gt;** | The updated extended key usage constraint or default value for when template is used during certificate issuance. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1PkiCertificateTemplatesCertificateTemplateIdPatchRequest } from './api';

const instance: ApiV1PkiCertificateTemplatesCertificateTemplateIdPatchRequest = {
    caId,
    pkiCollectionId,
    name,
    commonName,
    subjectAlternativeName,
    ttl,
    keyUsages,
    extendedKeyUsages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
