# ApiV1SecretApprovalRequestsGet200ResponseApprovalsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**policyId** | **string** |  | [default to undefined]
**hasMerged** | **boolean** |  | [optional] [default to false]
**status** | **string** |  | [optional] [default to 'open']
**conflicts** | **any** |  | [optional] [default to undefined]
**slug** | **string** |  | [default to undefined]
**folderId** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**isReplicated** | **boolean** |  | [optional] [default to undefined]
**committerUserId** | **string** |  | [default to undefined]
**statusChangedByUserId** | **string** |  | [optional] [default to undefined]
**bypassReason** | **string** |  | [optional] [default to undefined]
**policy** | [**ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerPolicy**](ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerPolicy.md) |  | [default to undefined]
**committerUser** | [**ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerCommitterUser**](ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerCommitterUser.md) |  | [default to undefined]
**commits** | [**Array&lt;ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerCommitsInner&gt;**](ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerCommitsInner.md) |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**reviewers** | [**Array&lt;ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerReviewersInner&gt;**](ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerReviewersInner.md) |  | [default to undefined]
**approvers** | [**Array&lt;ApiV1SecretApprovalsBoardGet200ResponsePolicyUserApproversInner&gt;**](ApiV1SecretApprovalsBoardGet200ResponsePolicyUserApproversInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretApprovalRequestsGet200ResponseApprovalsInner } from './api';

const instance: ApiV1SecretApprovalRequestsGet200ResponseApprovalsInner = {
    id,
    policyId,
    hasMerged,
    status,
    conflicts,
    slug,
    folderId,
    createdAt,
    updatedAt,
    isReplicated,
    committerUserId,
    statusChangedByUserId,
    bypassReason,
    policy,
    committerUser,
    commits,
    environment,
    reviewers,
    approvers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
