# ApiV1SecretImportsSecretImportIdGet200ResponseSecretImport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**version** | **number** |  | [optional] [default to 1]
**importPath** | **string** |  | [default to undefined]
**position** | **number** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**folderId** | **string** |  | [default to undefined]
**isReplication** | **boolean** |  | [optional] [default to false]
**isReplicationSuccess** | **boolean** |  | [optional] [default to undefined]
**replicationStatus** | **string** |  | [optional] [default to undefined]
**lastReplicated** | **string** |  | [optional] [default to undefined]
**isReserved** | **boolean** |  | [optional] [default to false]
**environment** | [**ApiV1SecretApprovalsGet200ResponseApprovalsInnerEnvironment**](ApiV1SecretApprovalsGet200ResponseApprovalsInnerEnvironment.md) |  | [default to undefined]
**projectId** | **string** |  | [default to undefined]
**importEnv** | [**ApiV1SecretImportsGet200ResponseSecretImportsInnerImportEnv**](ApiV1SecretImportsGet200ResponseSecretImportsInnerImportEnv.md) |  | [default to undefined]
**secretPath** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretImportsSecretImportIdGet200ResponseSecretImport } from './api';

const instance: ApiV1SecretImportsSecretImportIdGet200ResponseSecretImport = {
    id,
    version,
    importPath,
    position,
    createdAt,
    updatedAt,
    folderId,
    isReplication,
    isReplicationSuccess,
    replicationStatus,
    lastReplicated,
    isReserved,
    environment,
    projectId,
    importEnv,
    secretPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
