# ApiV1SshCertificatesSignPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificateTemplateId** | **string** | The ID of the SSH certificate template to sign the SSH public key with. | [default to undefined]
**publicKey** | **string** | The SSH public key to sign. | [default to undefined]
**certType** | **string** | The type of certificate to issue. This can be one of user or host. | [optional] [default to CertTypeEnum_User]
**principals** | **Array&lt;string&gt;** | The list of principals (usernames, hostnames) to include in the certificate. | [default to undefined]
**ttl** | **string** | The time to live for the certificate such as 1m, 1h, 1d, ... If not specified, the default TTL for the template will be used. | [optional] [default to undefined]
**keyId** | **string** | The key ID to include in the certificate. If not specified, a default key ID will be generated. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1SshCertificatesSignPostRequest } from './api';

const instance: ApiV1SshCertificatesSignPostRequest = {
    certificateTemplateId,
    publicKey,
    certType,
    principals,
    ttl,
    keyId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
