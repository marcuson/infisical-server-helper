# ApiV1AdditionalPrivilegeIdentityPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privilegeSlug** | **string** | The slug of the privilege to update. | [default to undefined]
**identityId** | **string** | The ID of the identity to update. | [default to undefined]
**projectSlug** | **string** | The slug of the project of the identity in. | [default to undefined]
**privilegeDetails** | [**ApiV1AdditionalPrivilegeIdentityPatchRequestPrivilegeDetails**](ApiV1AdditionalPrivilegeIdentityPatchRequestPrivilegeDetails.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1AdditionalPrivilegeIdentityPatchRequest } from './api';

const instance: ApiV1AdditionalPrivilegeIdentityPatchRequest = {
    privilegeSlug,
    identityId,
    projectSlug,
    privilegeDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
