# ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf7SyncOptions

Optional parameters to modify how secrets are synced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initialSyncBehavior** | **string** | Specify how Infisical should resolve the initial sync to the Humanitec destination. | [default to undefined]
**disableSecretDeletion** | **boolean** | Enable this flag to prevent removal of secrets from the Humanitec destination when syncing. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf7SyncOptions } from './api';

const instance: ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf7SyncOptions = {
    initialSyncBehavior,
    disableSecretDeletion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
