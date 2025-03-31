# ApiV1SecretApprovalsBoardGet200ResponsePolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**secretPath** | **string** |  | [optional] [default to undefined]
**approvals** | **number** |  | [optional] [default to 1]
**envId** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**enforcementLevel** | **string** |  | [optional] [default to 'hard']
**deletedAt** | **string** |  | [optional] [default to undefined]
**allowedSelfApprovals** | **boolean** |  | [optional] [default to true]
**environment** | [**ApiV1SecretApprovalsGet200ResponseApprovalsInnerEnvironment**](ApiV1SecretApprovalsGet200ResponseApprovalsInnerEnvironment.md) |  | [default to undefined]
**projectId** | **string** |  | [default to undefined]
**userApprovers** | [**Array&lt;ApiV1SecretApprovalsBoardGet200ResponsePolicyUserApproversInner&gt;**](ApiV1SecretApprovalsBoardGet200ResponsePolicyUserApproversInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretApprovalsBoardGet200ResponsePolicy } from './api';

const instance: ApiV1SecretApprovalsBoardGet200ResponsePolicy = {
    id,
    name,
    secretPath,
    approvals,
    envId,
    createdAt,
    updatedAt,
    enforcementLevel,
    deletedAt,
    allowedSelfApprovals,
    environment,
    projectId,
    userApprovers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
