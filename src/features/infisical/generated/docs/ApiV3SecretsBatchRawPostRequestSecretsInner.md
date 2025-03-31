# ApiV3SecretsBatchRawPostRequestSecretsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secretKey** | **string** | The name of the secret to create. | [default to undefined]
**secretValue** | **string** | The value of the secret to create. | [default to undefined]
**secretComment** | **string** | Attach a comment to the secret. | [optional] [default to '']
**skipMultilineEncoding** | **boolean** | Skip multiline encoding for the secret value. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**secretMetadata** | [**Array&lt;ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner&gt;**](ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner.md) |  | [optional] [default to undefined]
**tagIds** | **Array&lt;string&gt;** | The ID of the tags to be attached to the created secret. | [optional] [default to undefined]

## Example

```typescript
import { ApiV3SecretsBatchRawPostRequestSecretsInner } from './api';

const instance: ApiV3SecretsBatchRawPostRequestSecretsInner = {
    secretKey,
    secretValue,
    secretComment,
    skipMultilineEncoding,
    metadata,
    secretMetadata,
    tagIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
