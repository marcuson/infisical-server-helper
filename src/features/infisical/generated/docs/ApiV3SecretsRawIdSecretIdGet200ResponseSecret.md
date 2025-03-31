# ApiV3SecretsRawIdSecretIdGet200ResponseSecret


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**_id** | **string** |  | [default to undefined]
**workspace** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**version** | **number** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**secretKey** | **string** |  | [default to undefined]
**secretValue** | **string** |  | [default to undefined]
**secretComment** | **string** |  | [default to undefined]
**secretReminderNote** | **string** |  | [optional] [default to undefined]
**secretReminderRepeatDays** | **number** |  | [optional] [default to undefined]
**skipMultilineEncoding** | **boolean** |  | [optional] [default to false]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**actor** | [**ApiV1SecretSnapshotSecretSnapshotIdGet200ResponseSecretSnapshotSecretVersionsInnerActor**](ApiV1SecretSnapshotSecretSnapshotIdGet200ResponseSecretSnapshotSecretVersionsInnerActor.md) |  | [optional] [default to undefined]
**secretPath** | **string** |  | [default to undefined]
**tags** | [**Array&lt;ApiV1SecretSnapshotSecretSnapshotIdGet200ResponseSecretSnapshotSecretVersionsInnerTagsInner&gt;**](ApiV1SecretSnapshotSecretSnapshotIdGet200ResponseSecretSnapshotSecretVersionsInnerTagsInner.md) |  | [optional] [default to undefined]
**secretMetadata** | [**Array&lt;ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner&gt;**](ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV3SecretsRawIdSecretIdGet200ResponseSecret } from './api';

const instance: ApiV3SecretsRawIdSecretIdGet200ResponseSecret = {
    id,
    _id,
    workspace,
    environment,
    version,
    type,
    secretKey,
    secretValue,
    secretComment,
    secretReminderNote,
    secretReminderRepeatDays,
    skipMultilineEncoding,
    createdAt,
    updatedAt,
    actor,
    secretPath,
    tags,
    secretMetadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
