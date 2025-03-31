# ApiV1PasswordEmailPasswordResetVerifyPost200ResponseUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**authMethods** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**superAdmin** | **boolean** |  | [optional] [default to false]
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**isAccepted** | **boolean** |  | [optional] [default to false]
**isMfaEnabled** | **boolean** |  | [optional] [default to false]
**mfaMethods** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**devices** | **any** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**isGhost** | **boolean** |  | [optional] [default to false]
**username** | **string** |  | [default to undefined]
**isEmailVerified** | **boolean** |  | [optional] [default to false]
**consecutiveFailedMfaAttempts** | **number** |  | [optional] [default to 0]
**isLocked** | **boolean** |  | [optional] [default to false]
**temporaryLockDateEnd** | **string** |  | [optional] [default to undefined]
**consecutiveFailedPasswordAttempts** | **number** |  | [optional] [default to 0]
**selectedMfaMethod** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV1PasswordEmailPasswordResetVerifyPost200ResponseUser } from './api';

const instance: ApiV1PasswordEmailPasswordResetVerifyPost200ResponseUser = {
    id,
    email,
    authMethods,
    superAdmin,
    firstName,
    lastName,
    isAccepted,
    isMfaEnabled,
    mfaMethods,
    devices,
    createdAt,
    updatedAt,
    isGhost,
    username,
    isEmailVerified,
    consecutiveFailedMfaAttempts,
    isLocked,
    temporaryLockDateEnd,
    consecutiveFailedPasswordAttempts,
    selectedMfaMethod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
