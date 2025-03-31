# ApiV3SecretsBatchPatchRequestSecretsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secretName** | **string** |  | [default to undefined]
**type** | **string** |  | [optional] [default to TypeEnum_Shared]
**secretValueCiphertext** | **string** |  | [default to undefined]
**secretValueIV** | **string** |  | [default to undefined]
**secretValueTag** | **string** |  | [default to undefined]
**secretKeyCiphertext** | **string** |  | [default to undefined]
**secretKeyIV** | **string** |  | [default to undefined]
**secretKeyTag** | **string** |  | [default to undefined]
**secretCommentCiphertext** | **string** |  | [optional] [default to undefined]
**secretCommentIV** | **string** |  | [optional] [default to undefined]
**secretCommentTag** | **string** |  | [optional] [default to undefined]
**skipMultilineEncoding** | **boolean** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV3SecretsBatchPatchRequestSecretsInner } from './api';

const instance: ApiV3SecretsBatchPatchRequestSecretsInner = {
    secretName,
    type,
    secretValueCiphertext,
    secretValueIV,
    secretValueTag,
    secretKeyCiphertext,
    secretKeyIV,
    secretKeyTag,
    secretCommentCiphertext,
    secretCommentIV,
    secretCommentTag,
    skipMultilineEncoding,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
