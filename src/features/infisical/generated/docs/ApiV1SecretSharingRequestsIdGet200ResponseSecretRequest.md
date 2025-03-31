# ApiV1SecretSharingRequestsIdGet200ResponseSecretRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**hashedHex** | **string** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**orgId** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**expiresAfterViews** | **number** |  | [optional] [default to undefined]
**accessType** | **string** |  | [optional] [default to 'anyone']
**name** | **string** |  | [optional] [default to undefined]
**lastViewedAt** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**identifier** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to 'share']
**isSecretValueSet** | **boolean** |  | [default to undefined]
**requester** | [**ApiV1SecretSharingRequestsIdGet200ResponseSecretRequestRequester**](ApiV1SecretSharingRequestsIdGet200ResponseSecretRequestRequester.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretSharingRequestsIdGet200ResponseSecretRequest } from './api';

const instance: ApiV1SecretSharingRequestsIdGet200ResponseSecretRequest = {
    id,
    hashedHex,
    expiresAt,
    userId,
    orgId,
    createdAt,
    updatedAt,
    expiresAfterViews,
    accessType,
    name,
    lastViewedAt,
    password,
    identifier,
    type,
    isSecretValueSet,
    requester,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
