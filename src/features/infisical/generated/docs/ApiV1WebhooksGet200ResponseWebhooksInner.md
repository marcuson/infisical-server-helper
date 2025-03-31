# ApiV1WebhooksGet200ResponseWebhooksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**secretPath** | **string** |  | [optional] [default to '/']
**lastStatus** | **string** |  | [optional] [default to undefined]
**lastRunErrorMessage** | **string** |  | [optional] [default to undefined]
**isDisabled** | **boolean** |  | [optional] [default to false]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**envId** | **string** |  | [default to undefined]
**type** | **string** |  | [optional] [default to 'general']
**projectId** | **string** |  | [default to undefined]
**environment** | [**ApiV1SecretApprovalsGet200ResponseApprovalsInnerEnvironment**](ApiV1SecretApprovalsGet200ResponseApprovalsInnerEnvironment.md) |  | [default to undefined]
**url** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1WebhooksGet200ResponseWebhooksInner } from './api';

const instance: ApiV1WebhooksGet200ResponseWebhooksInner = {
    id,
    secretPath,
    lastStatus,
    lastRunErrorMessage,
    isDisabled,
    createdAt,
    updatedAt,
    envId,
    type,
    projectId,
    environment,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
