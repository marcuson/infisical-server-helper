# ApiV2AuthMfaVerifyPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryptionVersion** | **number** |  | [optional] [default to 1]
**protectedKey** | **string** |  | [default to undefined]
**protectedKeyIV** | **string** |  | [default to undefined]
**protectedKeyTag** | **string** |  | [default to undefined]
**publicKey** | **string** |  | [default to undefined]
**encryptedPrivateKey** | **string** |  | [default to undefined]
**iv** | **string** |  | [default to undefined]
**tag** | **string** |  | [default to undefined]
**token** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV2AuthMfaVerifyPost200Response } from './api';

const instance: ApiV2AuthMfaVerifyPost200Response = {
    encryptionVersion,
    protectedKey,
    protectedKeyIV,
    protectedKeyTag,
    publicKey,
    encryptedPrivateKey,
    iv,
    tag,
    token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
