# ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermissionConditions

When specified, only matching conditions will be allowed to access given resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **string** | The environment slug this permission should allow. | [default to undefined]
**secretPath** | [**ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInnerConditionsSecretPath**](ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInnerConditionsSecretPath.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermissionConditions } from './api';

const instance: ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermissionConditions = {
    environment,
    secretPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
