# ApiV3SecretsSecretNamePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**type** | **string** |  | [optional] [default to TypeEnum_Shared]
**secretPath** | **string** |  | [optional] [default to '/']
**secretKeyCiphertext** | **string** |  | [default to undefined]
**secretKeyIV** | **string** |  | [default to undefined]
**secretKeyTag** | **string** |  | [default to undefined]
**secretValueCiphertext** | **string** |  | [default to undefined]
**secretValueIV** | **string** |  | [default to undefined]
**secretValueTag** | **string** |  | [default to undefined]
**secretCommentCiphertext** | **string** |  | [optional] [default to undefined]
**secretCommentIV** | **string** |  | [optional] [default to undefined]
**secretCommentTag** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**skipMultilineEncoding** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV3SecretsSecretNamePostRequest } from './api';

const instance: ApiV3SecretsSecretNamePostRequest = {
    workspaceId,
    environment,
    type,
    secretPath,
    secretKeyCiphertext,
    secretKeyIV,
    secretKeyTag,
    secretValueCiphertext,
    secretValueIV,
    secretValueTag,
    secretCommentCiphertext,
    secretCommentIV,
    secretCommentTag,
    metadata,
    skipMultilineEncoding,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
