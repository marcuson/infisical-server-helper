# ApiV3SecretsRawSecretNamePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project to create the secret in. | [default to undefined]
**environment** | **string** | The slug of the environment to create the secret in. | [default to undefined]
**secretPath** | **string** | The path to create the secret in. | [optional] [default to '/']
**secretValue** | **string** | The value of the secret to create. | [default to undefined]
**secretComment** | **string** | Attach a comment to the secret. | [optional] [default to '']
**secretMetadata** | [**Array&lt;ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner&gt;**](ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner.md) |  | [optional] [default to undefined]
**tagIds** | **Array&lt;string&gt;** | The ID of the tags to be attached to the created secret. | [optional] [default to undefined]
**skipMultilineEncoding** | **boolean** | Skip multiline encoding for the secret value. | [optional] [default to undefined]
**type** | **string** | The type of the secret to create. | [optional] [default to TypeEnum_Shared]
**secretReminderRepeatDays** | **number** | Interval for secret rotation notifications, measured in days. | [optional] [default to undefined]
**secretReminderNote** | **string** | Note to be attached in notification email. | [optional] [default to undefined]

## Example

```typescript
import { ApiV3SecretsRawSecretNamePostRequest } from './api';

const instance: ApiV3SecretsRawSecretNamePostRequest = {
    workspaceId,
    environment,
    secretPath,
    secretValue,
    secretComment,
    secretMetadata,
    tagIds,
    skipMultilineEncoding,
    type,
    secretReminderRepeatDays,
    secretReminderNote,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
