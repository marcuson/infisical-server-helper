# ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**isAutoSyncEnabled** | **boolean** |  | [optional] [default to true]
**version** | **number** |  | [optional] [default to 1]
**projectId** | **string** |  | [default to undefined]
**folderId** | **string** |  | [optional] [default to undefined]
**connectionId** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**syncStatus** | **string** |  | [optional] [default to undefined]
**lastSyncJobId** | **string** |  | [optional] [default to undefined]
**lastSyncMessage** | **string** |  | [optional] [default to undefined]
**lastSyncedAt** | **string** |  | [optional] [default to undefined]
**importStatus** | **string** |  | [optional] [default to undefined]
**lastImportJobId** | **string** |  | [optional] [default to undefined]
**lastImportMessage** | **string** |  | [optional] [default to undefined]
**lastImportedAt** | **string** |  | [optional] [default to undefined]
**removeStatus** | **string** |  | [optional] [default to undefined]
**lastRemoveJobId** | **string** |  | [optional] [default to undefined]
**lastRemoveMessage** | **string** |  | [optional] [default to undefined]
**lastRemovedAt** | **string** |  | [optional] [default to undefined]
**syncOptions** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfSyncOptions**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfSyncOptions.md) |  | [default to undefined]
**connection** | [**ApiV1AppConnectionsAwsAvailableGet200ResponseAppConnectionsInner**](ApiV1AppConnectionsAwsAvailableGet200ResponseAppConnectionsInner.md) |  | [default to undefined]
**environment** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfEnvironment**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfEnvironment.md) |  | [default to undefined]
**folder** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfFolder**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfFolder.md) |  | [default to undefined]
**destination** | **string** |  | [default to undefined]
**destinationConfig** | [**ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfDestinationConfig**](ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOfDestinationConfig.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf } from './api';

const instance: ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf = {
    id,
    name,
    description,
    isAutoSyncEnabled,
    version,
    projectId,
    folderId,
    connectionId,
    createdAt,
    updatedAt,
    syncStatus,
    lastSyncJobId,
    lastSyncMessage,
    lastSyncedAt,
    importStatus,
    lastImportJobId,
    lastImportMessage,
    lastImportedAt,
    removeStatus,
    lastRemoveJobId,
    lastRemoveMessage,
    lastRemovedAt,
    syncOptions,
    connection,
    environment,
    folder,
    destination,
    destinationConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
