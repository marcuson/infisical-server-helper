# ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf5SyncOptions

Optional parameters to modify how secrets are synced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initialSyncBehavior** | **string** | Specify how Infisical should resolve the initial sync to the Azure App Configuration destination. | [default to undefined]
**disableSecretDeletion** | **boolean** | Enable this flag to prevent removal of secrets from the Azure App Configuration destination when syncing. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf5SyncOptions } from './api';

const instance: ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf5SyncOptions = {
    initialSyncBehavior,
    disableSecretDeletion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
