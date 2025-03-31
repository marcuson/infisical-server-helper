# ApiV3SecretsBatchRawPatchRequestSecretsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secretKey** | **string** | The name of the secret to update. | [default to undefined]
**secretValue** | **string** | The new value of the secret. | [default to undefined]
**secretPath** | **string** | The default path for secrets to update or upsert, if not provided in the secret details. | [optional] [default to undefined]
**secretComment** | **string** | Update comment to the secret. | [optional] [default to undefined]
**skipMultilineEncoding** | **boolean** | Skip multiline encoding for the secret value. | [optional] [default to undefined]
**newSecretName** | **string** | The new name for the secret. | [optional] [default to undefined]
**tagIds** | **Array&lt;string&gt;** | The ID of the tags to be attached to the updated secret. | [optional] [default to undefined]
**secretReminderNote** | **string** | Note to be attached in notification email. | [optional] [default to undefined]
**secretMetadata** | [**Array&lt;ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner&gt;**](ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner.md) |  | [optional] [default to undefined]
**secretReminderRepeatDays** | **number** | Interval for secret rotation notifications, measured in days. | [optional] [default to undefined]

## Example

```typescript
import { ApiV3SecretsBatchRawPatchRequestSecretsInner } from './api';

const instance: ApiV3SecretsBatchRawPatchRequestSecretsInner = {
    secretKey,
    secretValue,
    secretPath,
    secretComment,
    skipMultilineEncoding,
    newSecretName,
    tagIds,
    secretReminderNote,
    secretMetadata,
    secretReminderRepeatDays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
