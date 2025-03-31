# ApiV1AdditionalPrivilegeIdentityPermanentPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identityId** | **string** | The ID of the identity to create. | [default to undefined]
**projectSlug** | **string** | The slug of the project of the identity in. | [default to undefined]
**slug** | **string** | The slug of the privilege to create. | [optional] [default to undefined]
**permissions** | [**Array&lt;ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInner&gt;**](ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPermissionsInner.md) | @deprecated - use privilegePermission The permission object for the privilege. - Read secrets &#x60;&#x60;&#x60; { \&quot;permissions\&quot;: [{\&quot;action\&quot;: \&quot;read\&quot;, \&quot;subject\&quot;: \&quot;secrets\&quot;]} &#x60;&#x60;&#x60; - Read and Write secrets &#x60;&#x60;&#x60; { \&quot;permissions\&quot;: [{\&quot;action\&quot;: \&quot;read\&quot;, \&quot;subject\&quot;: \&quot;secrets\&quot;], {\&quot;action\&quot;: \&quot;write\&quot;, \&quot;subject\&quot;: \&quot;secrets\&quot;]} &#x60;&#x60;&#x60; - Read secrets scoped to an environment and secret path &#x60;&#x60;&#x60; - { \&quot;permissions\&quot;: [{\&quot;action\&quot;: \&quot;read\&quot;, \&quot;subject\&quot;: \&quot;secrets\&quot;, \&quot;conditions\&quot;: { \&quot;environment\&quot;: \&quot;dev\&quot;, \&quot;secretPath\&quot;: { \&quot;$glob\&quot;: \&quot;/\&quot; } }}] } &#x60;&#x60;&#x60;  | [optional] [default to undefined]
**privilegePermission** | [**ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermission**](ApiV1AdditionalPrivilegeIdentityPermanentPostRequestPrivilegePermission.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AdditionalPrivilegeIdentityPermanentPostRequest } from './api';

const instance: ApiV1AdditionalPrivilegeIdentityPermanentPostRequest = {
    identityId,
    projectSlug,
    slug,
    permissions,
    privilegePermission,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
