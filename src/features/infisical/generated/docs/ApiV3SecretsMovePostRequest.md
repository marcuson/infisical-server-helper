# ApiV3SecretsMovePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** |  | [default to undefined]
**sourceEnvironment** | **string** |  | [default to undefined]
**sourceSecretPath** | **string** |  | [optional] [default to '/']
**destinationEnvironment** | **string** |  | [default to undefined]
**destinationSecretPath** | **string** |  | [optional] [default to '/']
**secretIds** | **Array&lt;string&gt;** |  | [default to undefined]
**shouldOverwrite** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { ApiV3SecretsMovePostRequest } from './api';

const instance: ApiV3SecretsMovePostRequest = {
    projectSlug,
    sourceEnvironment,
    sourceSecretPath,
    destinationEnvironment,
    destinationSecretPath,
    secretIds,
    shouldOverwrite,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
