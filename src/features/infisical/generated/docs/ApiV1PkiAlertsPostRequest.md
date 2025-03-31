# ApiV1PkiAlertsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **string** | The ID of the project to create the alert in. | [default to undefined]
**pkiCollectionId** | **string** | The ID of the PKI collection to bind to the alert. | [default to undefined]
**name** | **string** | The name of the alert. | [default to undefined]
**alertBeforeDays** | **number** | The number of days before the certificate expires to trigger the alert. | [default to undefined]
**emails** | **Array&lt;string&gt;** | The email addresses to send the alert email to. | [default to undefined]

## Example

```typescript
import { ApiV1PkiAlertsPostRequest } from './api';

const instance: ApiV1PkiAlertsPostRequest = {
    projectId,
    pkiCollectionId,
    name,
    alertBeforeDays,
    emails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
