# ApiV1PkiCaCaIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | The status of the CA to update to. This can be one of active or disabled. | [optional] [default to undefined]
**requireTemplateForIssuance** | **boolean** | Whether or not certificates for this CA can only be issued through certificate templates. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1PkiCaCaIdPatchRequest } from './api';

const instance: ApiV1PkiCaCaIdPatchRequest = {
    status,
    requireTemplateForIssuance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
