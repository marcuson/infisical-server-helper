# ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf2DestinationConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **string** | The GitHub scope that secrets should be synced to | [default to undefined]
**org** | **string** | The name of the GitHub organization. | [default to undefined]
**visibility** | **string** |  | [default to undefined]
**selectedRepositoryIds** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**owner** | **string** | The name of the GitHub account owner of the repository. | [default to undefined]
**repo** | **string** | The name of the GitHub repository. | [default to undefined]
**env** | **string** | The name of the GitHub environment. | [default to undefined]

## Example

```typescript
import { ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf2DestinationConfig } from './api';

const instance: ApiV1SecretSyncsGet200ResponseSecretSyncsInnerAnyOf2DestinationConfig = {
    scope,
    org,
    visibility,
    selectedRepositoryIds,
    owner,
    repo,
    env,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
