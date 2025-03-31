# ApiV2WorkspaceProjectIdMembershipsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **Array&lt;string&gt;** | A list of organization member emails to invite to the project. | [optional] [default to undefined]
**usernames** | **Array&lt;string&gt;** | A list of usernames to invite to the project. | [optional] [default to undefined]
**roleSlugs** | **Array&lt;string&gt;** | A list of role slugs to assign to the newly created project membership. If nothing is provided, it will default to the Member role. | [optional] [default to undefined]

## Example

```typescript
import { ApiV2WorkspaceProjectIdMembershipsPostRequest } from './api';

const instance: ApiV2WorkspaceProjectIdMembershipsPostRequest = {
    emails,
    usernames,
    roleSlugs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
