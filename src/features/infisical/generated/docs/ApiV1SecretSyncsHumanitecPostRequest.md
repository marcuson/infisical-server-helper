# ApiV1SecretSyncsHumanitecPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the Humanitec Sync to create. Must be slug-friendly. | [default to undefined]
**projectId** | **string** | The ID of the project to create the sync in. | [default to undefined]
**description** | **string** | An optional description for the Humanitec Sync. | [optional] [default to undefined]
**connectionId** | **string** | The ID of the Humanitec Connection to use for syncing. | [default to undefined]
**environment** | **string** | The slug of the project environment to sync secrets from. | [default to undefined]
**secretPath** | **string** | The folder path to sync secrets from. | [default to undefined]
**isAutoSyncEnabled** | **boolean** | Whether secrets should be automatically synced when changes occur at the source location or not. | [optional] [default to true]
**syncOptions** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf7SyncOptions**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf7SyncOptions.md) |  | [default to undefined]
**destinationConfig** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf7DestinationConfig**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf7DestinationConfig.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretSyncsHumanitecPostRequest } from './api';

const instance: ApiV1SecretSyncsHumanitecPostRequest = {
    name,
    projectId,
    description,
    connectionId,
    environment,
    secretPath,
    isAutoSyncEnabled,
    syncOptions,
    destinationConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
