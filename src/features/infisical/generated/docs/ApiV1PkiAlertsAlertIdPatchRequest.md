# ApiV1PkiAlertsAlertIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the alert to update to. | [optional] [default to undefined]
**alertBeforeDays** | **number** | The number of days before the certificate expires to trigger the alert to update to. | [optional] [default to undefined]
**pkiCollectionId** | **string** | The ID of the PKI collection to bind to the alert to update to. | [optional] [default to undefined]
**emails** | **Array&lt;string&gt;** | The email addresses to send the alert email to update to. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1PkiAlertsAlertIdPatchRequest } from './api';

const instance: ApiV1PkiAlertsAlertIdPatchRequest = {
    name,
    alertBeforeDays,
    pkiCollectionId,
    emails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
