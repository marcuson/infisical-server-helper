# ApiV1SecretRotationsPost200ResponseSecretRotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**provider** | **string** |  | [default to undefined]
**secretPath** | **string** |  | [default to undefined]
**interval** | **number** |  | [default to undefined]
**lastRotatedAt** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**statusMessage** | **string** |  | [optional] [default to undefined]
**encryptedData** | **string** |  | [optional] [default to undefined]
**encryptedDataIV** | **string** |  | [optional] [default to undefined]
**encryptedDataTag** | **string** |  | [optional] [default to undefined]
**algorithm** | **string** |  | [optional] [default to undefined]
**keyEncoding** | **string** |  | [optional] [default to undefined]
**envId** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**encryptedRotationData** | **any** |  | [default to undefined]
**environment** | [**ApiV1SecretApprovalsGet200ResponseApprovalsInnerEnvironment**](ApiV1SecretApprovalsGet200ResponseApprovalsInnerEnvironment.md) |  | [default to undefined]
**outputs** | [**Array&lt;ApiV1SecretRotationsPost200ResponseSecretRotationOutputsInner&gt;**](ApiV1SecretRotationsPost200ResponseSecretRotationOutputsInner.md) |  | [default to undefined]

## Example

```typescript
import { ApiV1SecretRotationsPost200ResponseSecretRotation } from './api';

const instance: ApiV1SecretRotationsPost200ResponseSecretRotation = {
    id,
    provider,
    secretPath,
    interval,
    lastRotatedAt,
    status,
    statusMessage,
    encryptedData,
    encryptedDataIV,
    encryptedDataTag,
    algorithm,
    keyEncoding,
    envId,
    createdAt,
    updatedAt,
    encryptedRotationData,
    environment,
    outputs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
