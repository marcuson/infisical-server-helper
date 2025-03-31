# ApiV1AuditLogStreamsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The HTTP URL to push logs to. | [default to undefined]
**headers** | [**Array&lt;ApiV1AuditLogStreamsPostRequestHeadersInner&gt;**](ApiV1AuditLogStreamsPostRequestHeadersInner.md) | The HTTP headers attached for the external provider requests. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1AuditLogStreamsPostRequest } from './api';

const instance: ApiV1AuditLogStreamsPostRequest = {
    url,
    headers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
