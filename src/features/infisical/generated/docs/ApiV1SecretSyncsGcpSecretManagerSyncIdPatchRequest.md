# ApiV1SecretSyncsGcpSecretManagerSyncIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The updated name of the GCP Secret Manager Sync. Must be slug-friendly. | [optional] [default to undefined]
**connectionId** | **string** | The updated ID of the GCP Connection to use for syncing. | [optional] [default to undefined]
**description** | **string** | The updated description of the GCP Secret Manager Sync. | [optional] [default to undefined]
**environment** | **string** | The updated slug of the project environment to sync secrets from. | [optional] [default to undefined]
**secretPath** | **string** | The updated folder path to sync secrets from. | [optional] [default to undefined]
**isAutoSyncEnabled** | **boolean** | Whether secrets should be automatically synced when changes occur at the source location or not. | [optional] [default to undefined]
**syncOptions** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf3SyncOptions**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf3SyncOptions.md) |  | [optional] [default to undefined]
**destinationConfig** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf3DestinationConfig**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf3DestinationConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1SecretSyncsGcpSecretManagerSyncIdPatchRequest } from './api';

const instance: ApiV1SecretSyncsGcpSecretManagerSyncIdPatchRequest = {
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
