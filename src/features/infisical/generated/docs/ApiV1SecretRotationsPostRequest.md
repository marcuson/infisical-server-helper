# ApiV1SecretRotationsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceId** | **string** |  | [default to undefined]
**secretPath** | **string** |  | [default to undefined]
**environment** | **string** |  | [default to undefined]
**interval** | **number** |  | [default to undefined]
**provider** | **string** |  | [default to undefined]
**customProvider** | **string** |  | [optional] [default to undefined]
**inputs** | **{ [key: string]: any; }** |  | [default to undefined]
**outputs** | **{ [key: string]: string; }** |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretRotationsPostRequest } from './api';

const instance: ApiV1SecretRotationsPostRequest = {
    workspaceId,
    secretPath,
    environment,
    interval,
    provider,
    customProvider,
    inputs,
    outputs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
