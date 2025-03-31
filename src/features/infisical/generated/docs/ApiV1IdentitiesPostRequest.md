# ApiV1IdentitiesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the identity to create. | [default to undefined]
**organizationId** | **string** | The organization ID to which the identity belongs. | [default to undefined]
**role** | **string** | The role of the identity. Possible values are \&#39;no-access\&#39;, \&#39;member\&#39;, and \&#39;admin\&#39;. | [optional] [default to 'no-access']
**metadata** | [**Array&lt;ApiV1IdentitiesPostRequestMetadataInner&gt;**](ApiV1IdentitiesPostRequestMetadataInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1IdentitiesPostRequest } from './api';

const instance: ApiV1IdentitiesPostRequest = {
    name,
    organizationId,
    role,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
