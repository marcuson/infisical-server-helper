# ApiV1WorkspaceGet200ResponseWorkspacesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**slug** | **string** |  | [default to undefined]
**autoCapitalization** | **boolean** |  | [optional] [default to false]
**orgId** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**version** | **number** |  | [optional] [default to 1]
**upgradeStatus** | **string** |  | [optional] [default to undefined]
**pitVersionLimit** | **number** |  | [optional] [default to 10]
**kmsCertificateKeyId** | **string** |  | [optional] [default to undefined]
**auditLogsRetentionDays** | **number** |  | [optional] [default to undefined]
**_id** | **string** |  | [default to undefined]
**environments** | [**Array&lt;ApiV1SecretImportsGet200ResponseSecretImportsInnerImportEnv&gt;**](ApiV1SecretImportsGet200ResponseSecretImportsInnerImportEnv.md) |  | [default to undefined]
**roles** | [**Array&lt;ApiV1WorkspaceGet200ResponseWorkspacesInnerRolesInner&gt;**](ApiV1WorkspaceGet200ResponseWorkspacesInnerRolesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1WorkspaceGet200ResponseWorkspacesInner } from './api';

const instance: ApiV1WorkspaceGet200ResponseWorkspacesInner = {
    id,
    name,
    description,
    type,
    slug,
    autoCapitalization,
    orgId,
    createdAt,
    updatedAt,
    version,
    upgradeStatus,
    pitVersionLimit,
    kmsCertificateKeyId,
    auditLogsRetentionDays,
    _id,
    environments,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
