# ApiV1KmsKeysKeyIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The updated name of this key. Must be slug-friendly. | [optional] [default to undefined]
**isDisabled** | **boolean** | The flag to enable or disable this key. | [optional] [default to undefined]
**description** | **string** | The updated description of this key. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1KmsKeysKeyIdPatchRequest } from './api';

const instance: ApiV1KmsKeysKeyIdPatchRequest = {
    name,
    isDisabled,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
