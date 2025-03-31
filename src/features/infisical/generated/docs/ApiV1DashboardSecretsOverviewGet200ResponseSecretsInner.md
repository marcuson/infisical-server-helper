# ApiV1DashboardSecretsOverviewGet200ResponseSecretsInner


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
**secretValueHidden** | **boolean** |  | [default to undefined]
**secretPath** | **string** |  | [optional] [default to undefined]
**secretMetadata** | [**Array&lt;ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner&gt;**](ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInnerSecretMetadataInner.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;ApiV1SecretSnapshotSecretSnapshotIdGet200ResponseSecretSnapshotSecretVersionsInnerTagsInner&gt;**](ApiV1SecretSnapshotSecretSnapshotIdGet200ResponseSecretSnapshotSecretVersionsInnerTagsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1DashboardSecretsOverviewGet200ResponseSecretsInner } from './api';

const instance: ApiV1DashboardSecretsOverviewGet200ResponseSecretsInner = {
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
    secretValueHidden,
    secretPath,
    secretMetadata,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
