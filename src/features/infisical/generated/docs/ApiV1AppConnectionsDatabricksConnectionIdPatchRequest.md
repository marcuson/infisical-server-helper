# ApiV1AppConnectionsDatabricksConnectionIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ApiV1AppConnectionsDatabricksPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsDatabricksPostRequestAllOfAnyOfCredentials.md) |  | [optional] [default to undefined]
**name** | **string** | The updated name of the Databricks Connection. Must be slug-friendly. | [optional] [default to undefined]
**description** | **string** | The updated description of the Databricks Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsDatabricksConnectionIdPatchRequest } from './api';

const instance: ApiV1AppConnectionsDatabricksConnectionIdPatchRequest = {
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
