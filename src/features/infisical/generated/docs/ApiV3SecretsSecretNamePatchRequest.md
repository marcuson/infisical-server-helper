# ApiV3SecretsSecretNamePatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**secretId** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to TypeEnum_Shared]
**secretPath** | **string** |  | [optional] [default to '/']
**secretValueCiphertext** | **string** |  | [default to undefined]
**secretValueIV** | **string** |  | [default to undefined]
**secretValueTag** | **string** |  | [default to undefined]
**secretCommentCiphertext** | **string** |  | [optional] [default to undefined]
**secretCommentIV** | **string** |  | [optional] [default to undefined]
**secretCommentTag** | **string** |  | [optional] [default to undefined]
**secretReminderRepeatDays** | **number** |  | [optional] [default to undefined]
**secretReminderNote** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**skipMultilineEncoding** | **boolean** |  | [optional] [default to undefined]
**secretName** | **string** |  | [optional] [default to undefined]
**secretKeyIV** | **string** |  | [optional] [default to undefined]
**secretKeyTag** | **string** |  | [optional] [default to undefined]
**secretKeyCiphertext** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiV3SecretsSecretNamePatchRequest } from './api';

const instance: ApiV3SecretsSecretNamePatchRequest = {
    workspaceId,
    environment,
    secretId,
    type,
    secretPath,
    secretValueCiphertext,
    secretValueIV,
    secretValueTag,
    secretCommentCiphertext,
    secretCommentIV,
    secretCommentTag,
    secretReminderRepeatDays,
    secretReminderNote,
    tags,
    skipMultilineEncoding,
    secretName,
    secretKeyIV,
    secretKeyTag,
    secretKeyCiphertext,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
