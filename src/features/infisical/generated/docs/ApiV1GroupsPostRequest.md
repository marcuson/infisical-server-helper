# ApiV1GroupsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the group to create. | [default to undefined]
**slug** | **string** | The slug of the group to create. | [optional] [default to undefined]
**role** | **string** | The role of the group to create. | [optional] [default to 'no-access']

## Example

```typescript
import { ApiV1GroupsPostRequest } from './api';

const instance: ApiV1GroupsPostRequest = {
    name,
    slug,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
