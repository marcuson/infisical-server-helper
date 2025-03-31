# ApiV1IntegrationIntegrationIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | **string** | The name of the external integration providers app entity that you want to sync secrets with. Used in Netlify, GitHub, Vercel integrations. | [optional] [default to undefined]
**appId** | **string** | The ID of the external integration providers app entity that you want to sync secrets with. Used in Netlify, GitHub, Vercel integrations. | [optional] [default to undefined]
**isActive** | **boolean** | Whether the integration should be active or disabled. | [optional] [default to undefined]
**secretPath** | **string** | The path of the secrets to sync secrets from. | [optional] [default to '/']
**targetEnvironment** | **string** | The target environment of the integration provider. Used in cloudflare pages, TeamCity, Gitlab integrations. | [optional] [default to undefined]
**owner** | **string** | External integration providers service entity owner. Used in Github. | [optional] [default to undefined]
**environment** | **string** | The environment to sync secrets from. | [optional] [default to undefined]
**path** | **string** | Path to save the synced secrets. Used by Gitlab, AWS Parameter Store, Vault. | [optional] [default to undefined]
**metadata** | [**ApiV1IntegrationIntegrationIdPatchRequestMetadata**](ApiV1IntegrationIntegrationIdPatchRequestMetadata.md) |  | [optional] [default to undefined]
**region** | **string** | AWS region to sync secrets to. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1IntegrationIntegrationIdPatchRequest } from './api';

const instance: ApiV1IntegrationIntegrationIdPatchRequest = {
    app,
    appId,
    isActive,
    secretPath,
    targetEnvironment,
    owner,
    environment,
    path,
    metadata,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
