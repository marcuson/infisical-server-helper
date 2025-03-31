# ApiV1PkiCertificateTemplatesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caId** | **string** | The ID of the certificate authority to associate the template with. | [default to undefined]
**pkiCollectionId** | **string** | The ID of the PKI collection to bind to the template. | [optional] [default to undefined]
**name** | **string** | The name of the template. | [default to undefined]
**commonName** | **string** | The regular expression string to use for validating common names. | [default to undefined]
**subjectAlternativeName** | **string** | The regular expression string to use for validating subject alternative names. | [default to undefined]
**ttl** | **string** | The max TTL for the template. | [default to undefined]
**keyUsages** | **Array&lt;string&gt;** | The key usage constraint or default value for when template is used during certificate issuance. | [optional] [default to undefined]
**extendedKeyUsages** | **Array&lt;string&gt;** | The extended key usage constraint or default value for when template is used during certificate issuance. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1PkiCertificateTemplatesPostRequest } from './api';

const instance: ApiV1PkiCertificateTemplatesPostRequest = {
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
