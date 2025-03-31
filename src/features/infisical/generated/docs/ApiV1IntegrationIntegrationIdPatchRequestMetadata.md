# ApiV1IntegrationIntegrationIdPatchRequestMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initialSyncBehavior** | **string** | Type of syncing behavoir with the integration. | [optional] [default to undefined]
**secretPrefix** | **string** | The prefix for the saved secret. Used by GCP. | [optional] [default to undefined]
**secretSuffix** | **string** | The suffix for the saved secret. Used by GCP. | [optional] [default to undefined]
**mappingBehavior** | **string** | The mapping behavior of the integration. | [optional] [default to undefined]
**shouldAutoRedeploy** | **boolean** | Used by Render to trigger auto deploy. | [optional] [default to undefined]
**secretGCPLabel** | [**ApiV1IntegrationPostRequestMetadataSecretGCPLabel**](ApiV1IntegrationPostRequestMetadataSecretGCPLabel.md) |  | [optional] [default to undefined]
**secretAWSTag** | [**Array&lt;ApiV1AuditLogStreamsIdGet200ResponseAuditLogStreamHeadersInner&gt;**](ApiV1AuditLogStreamsIdGet200ResponseAuditLogStreamHeadersInner.md) | The tags for AWS secrets. | [optional] [default to undefined]
**azureLabel** | **string** | Define which label to assign to secrets created in Azure App Configuration. | [optional] [default to undefined]
**githubVisibility** | [**ApiV1IntegrationPostRequestMetadataGithubVisibility**](ApiV1IntegrationPostRequestMetadataGithubVisibility.md) |  | [optional] [default to undefined]
**githubVisibilityRepoIds** | **Array&lt;string&gt;** | The repository IDs to sync secrets to when using the Github Integration. Only applicable when using Organization scope, and visibility is set to \&#39;selected\&#39;. | [optional] [default to undefined]
**kmsKeyId** | **string** | The ID of the encryption key from AWS KMS. | [optional] [default to undefined]
**shouldDisableDelete** | **boolean** | The flag to disable deletion of secrets in AWS Parameter Store. | [optional] [default to undefined]
**shouldEnableDelete** | **boolean** | The flag to enable deletion of secrets. | [optional] [default to undefined]
**shouldMaskSecrets** | **boolean** | Specifies if the secrets synced from Infisical to Gitlab should be marked as \&#39;Masked\&#39;. | [optional] [default to undefined]
**shouldProtectSecrets** | **boolean** | Specifies if the secrets synced from Infisical to Gitlab should be marked as \&#39;Protected\&#39;. | [optional] [default to undefined]
**metadataSyncMode** | **string** | The mode for syncing metadata to external system | [optional] [default to undefined]
**octopusDeployScopeValues** | [**ApiV1IntegrationPostRequestMetadataOctopusDeployScopeValues**](ApiV1IntegrationPostRequestMetadataOctopusDeployScopeValues.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1IntegrationIntegrationIdPatchRequestMetadata } from './api';

const instance: ApiV1IntegrationIntegrationIdPatchRequestMetadata = {
    initialSyncBehavior,
    secretPrefix,
    secretSuffix,
    mappingBehavior,
    shouldAutoRedeploy,
    secretGCPLabel,
    secretAWSTag,
    azureLabel,
    githubVisibility,
    githubVisibilityRepoIds,
    kmsKeyId,
    shouldDisableDelete,
    shouldEnableDelete,
    shouldMaskSecrets,
    shouldProtectSecrets,
    metadataSyncMode,
    octopusDeployScopeValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
