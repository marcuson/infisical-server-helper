# ApiV1SshCertificateTemplatesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sshCaId** | **string** | The ID of the SSH CA to associate the certificate template with. | [default to undefined]
**name** | **string** | The name of the certificate template. | [default to undefined]
**ttl** | **string** | The default time to live for issued certificates such as 1m, 1h, 1d, 1y, ... | [optional] [default to '1h']
**maxTTL** | **string** | The maximum time to live for issued certificates such as 1m, 1h, 1d, 1y, ... | [optional] [default to '30d']
**allowedUsers** | **Array&lt;string&gt;** | The list of allowed users for certificates issued under this template. | [default to undefined]
**allowedHosts** | **Array&lt;string&gt;** | The list of allowed hosts for certificates issued under this template. | [default to undefined]
**allowUserCertificates** | **boolean** | Whether or not to allow user certificates to be issued under this template. | [default to undefined]
**allowHostCertificates** | **boolean** | Whether or not to allow host certificates to be issued under this template. | [default to undefined]
**allowCustomKeyIds** | **boolean** | Whether or not to allow custom key IDs for certificates issued under this template. | [default to undefined]

## Example

```typescript
import { ApiV1SshCertificateTemplatesPostRequest } from './api';

const instance: ApiV1SshCertificateTemplatesPostRequest = {
    sshCaId,
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
