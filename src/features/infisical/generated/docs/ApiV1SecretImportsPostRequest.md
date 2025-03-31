# ApiV1SecretImportsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** | The ID of the project you are working in. | [default to undefined]
**environment** | **string** | The slug of the environment to import into. | [default to undefined]
**path** | **string** | The path to import into. | [optional] [default to '/']
**_import** | [**ApiV1SecretImportsPostRequestImport**](ApiV1SecretImportsPostRequestImport.md) |  | [default to undefined]
**isReplication** | **boolean** | When true, secrets from the source will be automatically sent to the destination. If approval policies exist at the destination, the secrets will be sent as approval requests instead of being applied immediately. | [optional] [default to false]

## Example

```typescript
import { ApiV1SecretImportsPostRequest } from './api';

const instance: ApiV1SecretImportsPostRequest = {
    workspaceId,
    environment,
    path,
    _import,
    isReplication,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
