# ApiV1WebhooksPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to TypeEnum_General]
**workspaceId** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**webhookUrl** | **string** |  | [default to undefined]
**webhookSecretKey** | **string** |  | [optional] [default to undefined]
**secretPath** | **string** |  | [optional] [default to '/']

## Example

```typescript
import { ApiV1WebhooksPostRequest } from './api';

const instance: ApiV1WebhooksPostRequest = {
    type,
    workspaceId,
    environment,
    webhookUrl,
    webhookSecretKey,
    secretPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
