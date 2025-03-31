# ApiV1AccessApprovalsPoliciesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectSlug** | **string** |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**secretPath** | **string** |  | [optional] [default to '/']
**environment** | **string** |  | [default to undefined]
**approvers** | [**Array&lt;ApiV1SecretApprovalsPostRequestApproversInner&gt;**](ApiV1SecretApprovalsPostRequestApproversInner.md) |  | [default to undefined]
**approvals** | **number** |  | [optional] [default to 1]
**enforcementLevel** | **string** |  | [optional] [default to EnforcementLevelEnum_Hard]
**allowedSelfApprovals** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { ApiV1AccessApprovalsPoliciesPostRequest } from './api';

const instance: ApiV1AccessApprovalsPoliciesPostRequest = {
    projectSlug,
    name,
    secretPath,
    environment,
    approvers,
    approvals,
    enforcementLevel,
    allowedSelfApprovals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
