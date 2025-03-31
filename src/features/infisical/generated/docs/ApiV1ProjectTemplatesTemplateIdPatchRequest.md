# ApiV1ProjectTemplatesTemplateIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The updated name of the project template. Must be slug-friendly. | [optional] [default to undefined]
**description** | **string** | The updated description of the project template. | [optional] [default to undefined]
**roles** | [**Array&lt;ApiV1ProjectTemplatesPostRequestRolesInner&gt;**](ApiV1ProjectTemplatesPostRequestRolesInner.md) | The updated roles to be created when the template is applied to a project. | [optional] [default to undefined]
**environments** | [**Array&lt;ApiV1ProjectTemplatesGet200ResponseProjectTemplatesInnerEnvironmentsInner&gt;**](ApiV1ProjectTemplatesGet200ResponseProjectTemplatesInnerEnvironmentsInner.md) | The updated environments to be created when the template is applied to a project. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1ProjectTemplatesTemplateIdPatchRequest } from './api';

const instance: ApiV1ProjectTemplatesTemplateIdPatchRequest = {
    name,
    description,
    roles,
    environments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
