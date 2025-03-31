# ApiV2IdentityProjectAdditionalPrivilegePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **string** | The ID of the identity to create the privilege for. | [default to undefined]
**projectId** | **string** | The ID of the project of the identity in. | [default to undefined]
**slug** | **string** | The slug of the privilege to create. | [optional] [default to undefined]
**permissions** | [**Array&lt;ApiV1UserProjectAdditionalPrivilegePostRequestPermissionsInner&gt;**](ApiV1UserProjectAdditionalPrivilegePostRequestPermissionsInner.md) | The permission for the privilege. | [default to undefined]
**type** | [**ApiV2IdentityProjectAdditionalPrivilegePostRequestType**](ApiV2IdentityProjectAdditionalPrivilegePostRequestType.md) |  | [default to undefined]

## Example

```typescript
import { ApiV2IdentityProjectAdditionalPrivilegePostRequest } from './api';

const instance: ApiV2IdentityProjectAdditionalPrivilegePostRequest = {
    identityId,
    projectId,
    slug,
    permissions,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
