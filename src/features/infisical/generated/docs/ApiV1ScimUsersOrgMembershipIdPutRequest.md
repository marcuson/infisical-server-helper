# ApiV1ScimUsersOrgMembershipIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schemas** | **Array&lt;string&gt;** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**userName** | **string** |  | [default to undefined]
**name** | [**ApiV1ScimUsersGet200ResponseResourcesInnerName**](ApiV1ScimUsersGet200ResponseResourcesInnerName.md) |  | [optional] [default to undefined]
**displayName** | **string** |  | [default to undefined]
**emails** | [**Array&lt;ApiV1ScimUsersPostRequestEmailsInner&gt;**](ApiV1ScimUsersPostRequestEmailsInner.md) |  | [optional] [default to undefined]
**active** | **boolean** |  | [default to undefined]

## Example

```typescript
import { ApiV1ScimUsersOrgMembershipIdPutRequest } from './api';

const instance: ApiV1ScimUsersOrgMembershipIdPutRequest = {
    schemas,
    id,
    userName,
    name,
    displayName,
    emails,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
