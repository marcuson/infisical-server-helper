# ApiV1AuditLogStreamsIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The HTTP URL to push logs to. | [optional] [default to undefined]
**headers** | [**Array&lt;ApiV1AuditLogStreamsPostRequestHeadersInner&gt;**](ApiV1AuditLogStreamsPostRequestHeadersInner.md) | The HTTP headers attached for the external provider requests. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AuditLogStreamsIdPatchRequest } from './api';

const instance: ApiV1AuditLogStreamsIdPatchRequest = {
    url,
    headers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
