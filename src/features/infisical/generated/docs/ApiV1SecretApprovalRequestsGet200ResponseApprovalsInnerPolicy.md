# ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**approvals** | **number** |  | [default to undefined]
**approvers** | [**Array&lt;ApiV1SecretApprovalsBoardGet200ResponsePolicyUserApproversInner&gt;**](ApiV1SecretApprovalsBoardGet200ResponsePolicyUserApproversInner.md) |  | [default to undefined]
**secretPath** | **string** |  | [optional] [default to undefined]
**enforcementLevel** | **string** |  | [default to undefined]
**deletedAt** | **string** |  | [optional] [default to undefined]
**allowedSelfApprovals** | **boolean** |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerPolicy } from './api';

const instance: ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerPolicy = {
    id,
    name,
    approvals,
    approvers,
    secretPath,
    enforcementLevel,
    deletedAt,
    allowedSelfApprovals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
