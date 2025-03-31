# ApiV3SecretsRawSecretNamePatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project to update the secret in. | [default to undefined]
**environment** | **string** | The slug of the environment where the secret is located. | [default to undefined]
**secretValue** | **string** | The new value of the secret. | [default to undefined]
**secretPath** | **string** | The default path for secrets to update or upsert, if not provided in the secret details. | [optional] [default to '/']
**skipMultilineEncoding** | **boolean** | Skip multiline encoding for the secret value. | [optional] [default to undefined]
**type** | **string** | The type of the secret to update. | [optional] [default to TypeEnum_Shared]
**tagIds** | **Array&lt;string&gt;** | The ID of the tags to be attached to the updated secret. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**secretMetadata** | [**Array&lt;ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner&gt;**](ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner.md) |  | [optional] [default to undefined]
**secretReminderNote** | **string** | Note to be attached in notification email. | [optional] [default to undefined]
**secretReminderRepeatDays** | **number** | Interval for secret rotation notifications, measured in days. | [optional] [default to undefined]
**newSecretName** | **string** | The new name for the secret. | [optional] [default to undefined]
**secretComment** | **string** | Update comment to the secret. | [optional] [default to undefined]

## Example

```typescript
import { ApiV3SecretsRawSecretNamePatchRequest } from './api';

const instance: ApiV3SecretsRawSecretNamePatchRequest = {
    workspaceId,
    environment,
    secretValue,
    secretPath,
    skipMultilineEncoding,
    type,
    tagIds,
    metadata,
    secretMetadata,
    secretReminderNote,
    secretReminderRepeatDays,
    newSecretName,
    secretComment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
