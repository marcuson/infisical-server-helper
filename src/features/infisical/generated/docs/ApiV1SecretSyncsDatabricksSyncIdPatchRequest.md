# ApiV1SecretSyncsDatabricksSyncIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The updated name of the Databricks Sync. Must be slug-friendly. | [optional] [default to undefined]
**connectionId** | **string** | The updated ID of the Databricks Connection to use for syncing. | [optional] [default to undefined]
**description** | **string** | The updated description of the Databricks Sync. | [optional] [default to undefined]
**environment** | **string** | The updated slug of the project environment to sync secrets from. | [optional] [default to undefined]
**secretPath** | **string** | The updated folder path to sync secrets from. | [optional] [default to undefined]
**isAutoSyncEnabled** | **boolean** | Whether secrets should be automatically synced when changes occur at the source location or not. | [optional] [default to undefined]
**syncOptions** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf6SyncOptions**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf6SyncOptions.md) |  | [optional] [default to undefined]
**destinationConfig** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf6DestinationConfig**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf6DestinationConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1SecretSyncsDatabricksSyncIdPatchRequest } from './api';

const instance: ApiV1SecretSyncsDatabricksSyncIdPatchRequest = {
    name,
    connectionId,
    description,
    environment,
    secretPath,
    isAutoSyncEnabled,
    syncOptions,
    destinationConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
