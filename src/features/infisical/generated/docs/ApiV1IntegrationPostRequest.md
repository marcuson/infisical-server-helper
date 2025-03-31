# ApiV1IntegrationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integrationAuthId** | **string** | The ID of the integration auth object to link with integration. | [default to undefined]
**app** | **string** | The name of the external integration providers app entity that you want to sync secrets with. Used in Netlify, GitHub, Vercel integrations. | [optional] [default to undefined]
**isActive** | **boolean** | Whether the integration should be active or disabled. | [optional] [default to true]
**appId** | **string** | The ID of the external integration providers app entity that you want to sync secrets with. Used in Netlify, GitHub, Vercel integrations. | [optional] [default to undefined]
**secretPath** | **string** | The path of the secrets to sync secrets from. | [optional] [default to '/']
**sourceEnvironment** | **string** | The environment to sync secret from. | [default to undefined]
**targetEnvironment** | **string** | The target environment of the integration provider. Used in cloudflare pages, TeamCity, Gitlab integrations. | [optional] [default to undefined]
**targetEnvironmentId** | **string** | The target environment ID of the integration provider. Used in cloudflare pages, teamcity, gitlab integrations. | [optional] [default to undefined]
**targetService** | **string** | The service based grouping identifier of the external provider. Used in Terraform cloud, Checkly, Railway and NorthFlank. | [optional] [default to undefined]
**targetServiceId** | **string** | The service based grouping identifier ID of the external provider. Used in Terraform cloud, Checkly, Railway and NorthFlank. | [optional] [default to undefined]
**owner** | **string** | External integration providers service entity owner. Used in Github. | [optional] [default to undefined]
**url** | **string** | The self-hosted URL of the platform to integrate with. | [optional] [default to undefined]
**path** | **string** | Path to save the synced secrets. Used by Gitlab, AWS Parameter Store, Vault. | [optional] [default to undefined]
**region** | **string** | AWS region to sync secrets to. | [optional] [default to undefined]
**scope** | **string** | Scope of the provider. Used by Github, Qovery. | [optional] [default to undefined]
**metadata** | [**ApiV1IntegrationPostRequestMetadata**](ApiV1IntegrationPostRequestMetadata.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1IntegrationPostRequest } from './api';

const instance: ApiV1IntegrationPostRequest = {
    integrationAuthId,
    app,
    isActive,
    appId,
    secretPath,
    sourceEnvironment,
    targetEnvironment,
    targetEnvironmentId,
    targetService,
    targetServiceId,
    owner,
    url,
    path,
    region,
    scope,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
