# ApiV1AppConnectionsDatabricksPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** | The method used to authenticate with Databricks. | [default to undefined]
**credentials** | [**ApiV1AppConnectionsDatabricksPostRequestAllOfAnyOfCredentials**](ApiV1AppConnectionsDatabricksPostRequestAllOfAnyOfCredentials.md) |  | [default to undefined]
**name** | **string** | The name of the Databricks Connection to create. Must be slug-friendly. | [default to undefined]
**description** | **string** | An optional description for the Databricks Connection. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AppConnectionsDatabricksPostRequest } from './api';

const instance: ApiV1AppConnectionsDatabricksPostRequest = {
    method,
    credentials,
    name,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
