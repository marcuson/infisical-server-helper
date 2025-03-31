# ApiV1AccessApprovalsRequestsGet200ResponseRequestsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**policyId** | **string** |  | [default to undefined]
**privilegeId** | **string** |  | [optional] [default to undefined]
**requestedBy** | **string** |  | [optional] [default to undefined]
**isTemporary** | **boolean** |  | [default to undefined]
**temporaryRange** | **string** |  | [optional] [default to undefined]
**permissions** | **any** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**requestedByUserId** | **string** |  | [default to undefined]
**environmentName** | **string** |  | [default to undefined]
**isApproved** | **boolean** |  | [default to undefined]
**privilege** | [**ApiV1AccessApprovalsRequestsGet200ResponseRequestsInnerPrivilege**](ApiV1AccessApprovalsRequestsGet200ResponseRequestsInnerPrivilege.md) |  | [default to undefined]
**policy** | [**ApiV1AccessApprovalsRequestsGet200ResponseRequestsInnerPolicy**](ApiV1AccessApprovalsRequestsGet200ResponseRequestsInnerPolicy.md) |  | [default to undefined]
**reviewers** | [**Array&lt;ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerReviewersInner&gt;**](ApiV1SecretApprovalRequestsGet200ResponseApprovalsInnerReviewersInner.md) |  | [default to undefined]
**requestedByUser** | [**ApiV1AccessApprovalsRequestsGet200ResponseRequestsInnerRequestedByUser**](ApiV1AccessApprovalsRequestsGet200ResponseRequestsInnerRequestedByUser.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1AccessApprovalsRequestsGet200ResponseRequestsInner } from './api';

const instance: ApiV1AccessApprovalsRequestsGet200ResponseRequestsInner = {
    id,
    policyId,
    privilegeId,
    requestedBy,
    isTemporary,
    temporaryRange,
    permissions,
    createdAt,
    updatedAt,
    requestedByUserId,
    environmentName,
    isApproved,
    privilege,
    policy,
    reviewers,
    requestedByUser,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
