# ApiV1SecretApprovalRequestsIdGet200ResponseApproval


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
**policy** | [**ApiV1SecretApprovalRequestsIdGet200ResponseApprovalPolicy**](ApiV1SecretApprovalRequestsIdGet200ResponseApprovalPolicy.md) |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**statusChangedByUser** | [**ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerCommitterUser**](ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerCommitterUser.md) |  | [optional] [default to undefined]
**committerUser** | [**ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerCommitterUser**](ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerCommitterUser.md) |  | [default to undefined]
**reviewers** | [**Array&lt;ApiV1SecretApprovalRequestsIdGet200ResponseApprovalReviewersInner&gt;**](ApiV1SecretApprovalRequestsIdGet200ResponseApprovalReviewersInner.md) |  | [default to undefined]
**secretPath** | **string** |  | [default to undefined]
**commits** | [**Array&lt;ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInner&gt;**](ApiV1SecretApprovalRequestsIdGet200ResponseApprovalCommitsInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretApprovalRequestsIdGet200ResponseApproval } from './api';

const instance: ApiV1SecretApprovalRequestsIdGet200ResponseApproval = {
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
    environment,
    statusChangedByUser,
    committerUser,
    reviewers,
    secretPath,
    commits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
