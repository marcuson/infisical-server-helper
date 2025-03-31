# ApiV1ProjectTemplatesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the project template to be created. Must be slug-friendly. | [default to undefined]
**description** | **string** | An optional description of the project template. | [optional] [default to undefined]
**roles** | [**Array&lt;ApiV1ProjectTemplatesPostRequestRolesInner&gt;**](ApiV1ProjectTemplatesPostRequestRolesInner.md) | The roles to be created when the template is applied to a project. | [optional] [default to undefined]
**environments** | [**Array&lt;ApiV1ProjectTemplatesGet200ResponseProjectTemplatesInnerEnvironmentsInner&gt;**](ApiV1ProjectTemplatesGet200ResponseProjectTemplatesInnerEnvironmentsInner.md) | The environments to be created when the template is applied to a project. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1ProjectTemplatesPostRequest } from './api';

const instance: ApiV1ProjectTemplatesPostRequest = {
    name,
    description,
    roles,
    environments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
