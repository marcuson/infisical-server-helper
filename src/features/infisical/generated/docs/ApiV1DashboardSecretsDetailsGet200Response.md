# ApiV1DashboardSecretsDetailsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imports** | [**Array&lt;ApiV1SecretImportsGet200ResponseSecretImportsInner&gt;**](ApiV1SecretImportsGet200ResponseSecretImportsInner.md) |  | [optional] [default to undefined]
**folders** | [**Array&lt;ApiV1FoldersPost200ResponseFolder&gt;**](ApiV1FoldersPost200ResponseFolder.md) |  | [optional] [default to undefined]
**dynamicSecrets** | [**Array&lt;ApiV1DynamicSecretsGet200ResponseDynamicSecretsInner&gt;**](ApiV1DynamicSecretsGet200ResponseDynamicSecretsInner.md) |  | [optional] [default to undefined]
**secrets** | [**Array&lt;ApiV1DashboardSecretsOverviewGet200ResponseSecretsInner&gt;**](ApiV1DashboardSecretsOverviewGet200ResponseSecretsInner.md) |  | [optional] [default to undefined]
**totalImportCount** | **number** |  | [optional] [default to undefined]
**totalFolderCount** | **number** |  | [optional] [default to undefined]
**totalDynamicSecretCount** | **number** |  | [optional] [default to undefined]
**totalSecretCount** | **number** |  | [optional] [default to undefined]
**totalCount** | **number** |  | [default to undefined]

## Example

```typescript
import { ApiV1DashboardSecretsDetailsGet200Response } from './api';

const instance: ApiV1DashboardSecretsDetailsGet200Response = {
    imports,
    folders,
    dynamicSecrets,
    secrets,
    totalImportCount,
    totalFolderCount,
    totalDynamicSecretCount,
    totalSecretCount,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
