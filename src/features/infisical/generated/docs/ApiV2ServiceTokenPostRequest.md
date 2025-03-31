# ApiV2ServiceTokenPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**workspaceId** | **string** |  | [default to undefined]
**scopes** | [**Array&lt;ApiV2ServiceTokenPostRequestScopesInner&gt;**](ApiV2ServiceTokenPostRequestScopesInner.md) |  | [default to undefined]
**encryptedKey** | **string** |  | [default to undefined]
**iv** | **string** |  | [default to undefined]
**tag** | **string** |  | [default to undefined]
**expiresIn** | **number** |  | [default to undefined]
**permissions** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { ApiV2ServiceTokenPostRequest } from './api';

const instance: ApiV2ServiceTokenPostRequest = {
    name,
    workspaceId,
    scopes,
    encryptedKey,
    iv,
    tag,
    expiresIn,
    permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
