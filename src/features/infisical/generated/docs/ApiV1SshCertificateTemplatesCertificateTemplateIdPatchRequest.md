# ApiV1SshCertificateTemplatesCertificateTemplateIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to undefined]
**name** | **string** | The name of the certificate template. | [optional] [default to undefined]
**ttl** | **string** | The default time to live for issued certificates such as 1m, 1h, 1d, 1y, ... | [optional] [default to undefined]
**maxTTL** | **string** | The maximum time to live for issued certificates such as 1m, 1h, 1d, 1y, ... | [optional] [default to undefined]
**allowedUsers** | **Array&lt;string&gt;** | The list of allowed users for certificates issued under this template. | [optional] [default to undefined]
**allowedHosts** | **Array&lt;string&gt;** | The list of allowed hosts for certificates issued under this template. | [optional] [default to undefined]
**allowUserCertificates** | **boolean** | Whether or not to allow user certificates to be issued under this template. | [optional] [default to undefined]
**allowHostCertificates** | **boolean** | Whether or not to allow host certificates to be issued under this template. | [optional] [default to undefined]
**allowCustomKeyIds** | **boolean** | Whether or not to allow custom key IDs for certificates issued under this template. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1SshCertificateTemplatesCertificateTemplateIdPatchRequest } from './api';

const instance: ApiV1SshCertificateTemplatesCertificateTemplateIdPatchRequest = {
    status,
    name,
    ttl,
    maxTTL,
    allowedUsers,
    allowedHosts,
    allowUserCertificates,
    allowHostCertificates,
    allowCustomKeyIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
