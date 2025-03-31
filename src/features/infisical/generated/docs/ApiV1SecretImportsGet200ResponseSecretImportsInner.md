# ApiV1SecretImportsGet200ResponseSecretImportsInner


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
**importEnv** | [**ApiV1SecretImportsGet200ResponseSecretImportsInnerImportEnv**](ApiV1SecretImportsGet200ResponseSecretImportsInnerImportEnv.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretImportsGet200ResponseSecretImportsInner } from './api';

const instance: ApiV1SecretImportsGet200ResponseSecretImportsInner = {
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
    importEnv,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
