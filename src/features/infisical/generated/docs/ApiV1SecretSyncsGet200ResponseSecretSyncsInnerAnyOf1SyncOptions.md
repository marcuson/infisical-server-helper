# ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf1SyncOptions

Optional parameters to modify how secrets are synced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initialSyncBehavior** | **string** | Specify how Infisical should resolve the initial sync to the AWS Secrets Manager destination. | [default to undefined]
**disableSecretDeletion** | **boolean** | Enable this flag to prevent removal of secrets from the AWS Secrets Manager destination when syncing. | [optional] [default to undefined]
**keyId** | **string** | The AWS KMS key ID or alias to use when encrypting parameters synced by Infisical. | [optional] [default to undefined]
**tags** | [**Array&lt;ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfSyncOptionsTagsInner&gt;**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfSyncOptionsTagsInner.md) | Optional tags to add to secrets synced by Infisical. | [optional] [default to undefined]
**syncSecretMetadataAsTags** | **boolean** | Whether Infisical secret metadata should be added as tags to secrets synced by Infisical. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf1SyncOptions } from './api';

const instance: ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf1SyncOptions = {
    initialSyncBehavior,
    disableSecretDeletion,
    keyId,
    tags,
    syncSecretMetadataAsTags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
