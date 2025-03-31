# ApiV1AdditionalPrivilegeIdentityPatchRequestPrivilegeDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **string** | The new slug of the privilege to update. | [optional] [default to undefined]
**permissions** | [**Array&lt;ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInner&gt;**](ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInner.md) | @deprecated - use privilegePermission The permission object for the privilege. - Read secrets &#x60;&#x60;&#x60; { \&quot;permissions\&quot;: [{\&quot;action\&quot;: \&quot;read\&quot;, \&quot;subject\&quot;: \&quot;secrets\&quot;]} &#x60;&#x60;&#x60; - Read and Write secrets &#x60;&#x60;&#x60; { \&quot;permissions\&quot;: [{\&quot;action\&quot;: \&quot;read\&quot;, \&quot;subject\&quot;: \&quot;secrets\&quot;], {\&quot;action\&quot;: \&quot;write\&quot;, \&quot;subject\&quot;: \&quot;secrets\&quot;]} &#x60;&#x60;&#x60; - Read secrets scoped to an environment and secret path &#x60;&#x60;&#x60; - { \&quot;permissions\&quot;: [{\&quot;action\&quot;: \&quot;read\&quot;, \&quot;subject\&quot;: \&quot;secrets\&quot;, \&quot;conditions\&quot;: { \&quot;environment\&quot;: \&quot;dev\&quot;, \&quot;secretPath\&quot;: { \&quot;$glob\&quot;: \&quot;/\&quot; } }}] } &#x60;&#x60;&#x60;  | [optional] [default to undefined]
**privilegePermission** | [**ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermission**](ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermission.md) |  | [optional] [default to undefined]
**isTemporary** | **boolean** | Whether the privilege is temporary. | [optional] [default to undefined]
**temporaryMode** | **string** | Type of temporary access given. Types: relative. | [optional] [default to undefined]
**temporaryRange** | **string** | TTL for the temporary time. Eg: 1m, 1h, 1d. | [optional] [default to undefined]
**temporaryAccessStartTime** | **string** | ISO time for which temporary access should begin. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AdditionalPrivilegeIdentityPatchRequestPrivilegeDetails } from './api';

const instance: ApiV1AdditionalPrivilegeIdentityPatchRequestPrivilegeDetails = {
    slug,
    permissions,
    privilegePermission,
    isTemporary,
    temporaryMode,
    temporaryRange,
    temporaryAccessStartTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
