# ApiV1ScimUsersPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schemas** | **Array&lt;string&gt;** |  | [default to undefined]
**userName** | **string** |  | [default to undefined]
**name** | [**ApiV1ScimUsersGet200ResponseResourcesInnerName**](ApiV1ScimUsersGet200ResponseResourcesInnerName.md) |  | [optional] [default to undefined]
**emails** | [**Array&lt;ApiV1ScimUsersPostRequestEmailsInner&gt;**](ApiV1ScimUsersPostRequestEmailsInner.md) |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { ApiV1ScimUsersPostRequest } from './api';

const instance: ApiV1ScimUsersPostRequest = {
    schemas,
    userName,
    name,
    emails,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
