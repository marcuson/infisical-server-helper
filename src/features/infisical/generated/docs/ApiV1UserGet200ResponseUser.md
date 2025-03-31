# ApiV1UserGet200ResponseUser


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
**clientPublicKey** | **string** |  | [optional] [default to undefined]
**serverPrivateKey** | **string** |  | [optional] [default to undefined]
**encryptionVersion** | **number** |  | [optional] [default to 2]
**protectedKey** | **string** |  | [optional] [default to undefined]
**protectedKeyIV** | **string** |  | [optional] [default to undefined]
**protectedKeyTag** | **string** |  | [optional] [default to undefined]
**publicKey** | **string** |  | [default to undefined]
**encryptedPrivateKey** | **string** |  | [default to undefined]
**iv** | **string** |  | [default to undefined]
**tag** | **string** |  | [default to undefined]
**salt** | **string** |  | [default to undefined]
**verifier** | **string** |  | [default to undefined]
**userId** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1UserGet200ResponseUser } from './api';

const instance: ApiV1UserGet200ResponseUser = {
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
    clientPublicKey,
    serverPrivateKey,
    encryptionVersion,
    protectedKey,
    protectedKeyIV,
    protectedKeyTag,
    publicKey,
    encryptedPrivateKey,
    iv,
    tag,
    salt,
    verifier,
    userId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
