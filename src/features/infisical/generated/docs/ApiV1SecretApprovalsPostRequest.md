# ApiV1SecretApprovalsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**environment** | **string** |  | [default to undefined]
**secretPath** | **string** |  | [optional] [default to '/']
**approvers** | [**Array&lt;ApiV1SecretApprovalsPostRequestApproversInner&gt;**](ApiV1SecretApprovalsPostRequestApproversInner.md) |  | [default to undefined]
**approvals** | **number** |  | [optional] [default to 1]
**enforcementLevel** | **string** |  | [optional] [default to EnforcementLevelEnum_Hard]
**allowedSelfApprovals** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { ApiV1SecretApprovalsPostRequest } from './api';

const instance: ApiV1SecretApprovalsPostRequest = {
    workspaceId,
    name,
    environment,
    secretPath,
    approvers,
    approvals,
    enforcementLevel,
    allowedSelfApprovals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
