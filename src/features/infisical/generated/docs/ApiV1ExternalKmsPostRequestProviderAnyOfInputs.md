# ApiV1ExternalKmsPostRequestProviderAnyOfInputs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential** | [**ApiV1ExternalKmsPostRequestProviderAnyOfInputsCredential**](ApiV1ExternalKmsPostRequestProviderAnyOfInputsCredential.md) |  | [default to undefined]
**awsRegion** | **string** | AWS region to connect | [default to undefined]
**kmsKeyId** | **string** | A pre existing AWS KMS key id to be used for encryption. If not provided a kms key will be generated. | [optional] [default to undefined]

## Example

```typescript
import { ApiV1ExternalKmsPostRequestProviderAnyOfInputs } from './api';

const instance: ApiV1ExternalKmsPostRequestProviderAnyOfInputs = {
    credential,
    awsRegion,
    kmsKeyId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
