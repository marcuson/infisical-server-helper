# ApiV1PkiCaPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** | Slug of the project to create the CA in. | [default to undefined]
**type** | **string** | The type of CA to create. | [default to undefined]
**friendlyName** | **string** | A friendly name for the CA. | [optional] [default to undefined]
**commonName** | **string** | The common name (CN) for the CA. | [default to undefined]
**organization** | **string** | The organization (O) for the CA. | [default to undefined]
**ou** | **string** | The organization unit (OU) for the CA. | [default to undefined]
**country** | **string** | The country name (C) for the CA. | [default to undefined]
**province** | **string** | The state of province name for the CA. | [default to undefined]
**locality** | **string** | The locality name for the CA. | [default to undefined]
**notBefore** | **string** | The date and time when the CA becomes valid in YYYY-MM-DDTHH:mm:ss.sssZ format. | [optional] [default to undefined]
**notAfter** | **string** | The date and time when the CA expires in YYYY-MM-DDTHH:mm:ss.sssZ format. | [optional] [default to undefined]
**maxPathLength** | **number** | The maximum number of intermediate CAs that may follow this CA in the certificate / CA chain. A maxPathLength of -1 implies no path limit on the chain. | [optional] [default to -1]
**keyAlgorithm** | **string** | The type of public key algorithm and size, in bits, of the key pair for the CA; when you create an intermediate CA, you must use a key algorithm supported by the parent CA. | [optional] [default to KeyAlgorithmEnum_Rsa2048]
**requireTemplateForIssuance** | **boolean** | Whether or not certificates for this CA can only be issued through certificate templates. | [optional] [default to false]

## Example

```typescript
import { ApiV1PkiCaPostRequest } from './api';

const instance: ApiV1PkiCaPostRequest = {
    projectSlug,
    type,
    friendlyName,
    commonName,
    organization,
    ou,
    country,
    province,
    locality,
    notBefore,
    notAfter,
    maxPathLength,
    keyAlgorithm,
    requireTemplateForIssuance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
