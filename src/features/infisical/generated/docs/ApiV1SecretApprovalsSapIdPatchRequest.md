# ApiV1SecretApprovalsSapIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**approvers** | [**Array&lt;ApiV1SecretApprovalsPostRequestApproversInner&gt;**](ApiV1SecretApprovalsPostRequestApproversInner.md) |  | [default to undefined]
**approvals** | **number** |  | [optional] [default to 1]
**secretPath** | **string** |  | [optional] [default to undefined]
**enforcementLevel** | **string** |  | [optional] [default to undefined]
**allowedSelfApprovals** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { ApiV1SecretApprovalsSapIdPatchRequest } from './api';

const instance: ApiV1SecretApprovalsSapIdPatchRequest = {
    name,
    approvers,
    approvals,
    secretPath,
    enforcementLevel,
    allowedSelfApprovals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
