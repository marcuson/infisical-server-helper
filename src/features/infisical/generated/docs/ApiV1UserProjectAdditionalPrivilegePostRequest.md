# ApiV1UserProjectAdditionalPrivilegePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectMembershipId** | **string** | Project membership ID of user. | [default to undefined]
**slug** | **string** | The slug of the privilege to create. | [optional] [default to undefined]
**permissions** | [**Array&lt;ApiV1UserProjectAdditionalPrivilegePostRequestPermissionsInner&gt;**](ApiV1UserProjectAdditionalPrivilegePostRequestPermissionsInner.md) | The permission object for the privilege. Refer https://casl.js.org/v6/en/guide/define-rules#the-shape-of-raw-rule to understand the shape. | [default to undefined]
**type** | [**ApiV1UserProjectAdditionalPrivilegePostRequestType**](ApiV1UserProjectAdditionalPrivilegePostRequestType.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1UserProjectAdditionalPrivilegePostRequest } from './api';

const instance: ApiV1UserProjectAdditionalPrivilegePostRequest = {
    projectMembershipId,
    slug,
    permissions,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
