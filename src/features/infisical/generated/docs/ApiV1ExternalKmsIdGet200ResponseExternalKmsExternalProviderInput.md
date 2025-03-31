# ApiV1ExternalKmsIdGet200ResponseExternalKmsExternalProviderInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential** | [**ApiV1ExternalKmsPostRequestProviderAnyOfInputsCredential**](ApiV1ExternalKmsPostRequestProviderAnyOfInputsCredential.md) |  | [default to undefined]
**awsRegion** | **string** | AWS region to connect | [default to undefined]
**kmsKeyId** | **string** | A pre existing AWS KMS key id to be used for encryption. If not provided a kms key will be generated. | [optional] [default to undefined]
**gcpRegion** | **string** | GCP region where the KMS key is located | [default to undefined]
**keyName** | **string** | GCP key name | [default to undefined]

## Example

```typescript
import { ApiV1ExternalKmsIdGet200ResponseExternalKmsExternalProviderInput } from './api';

const instance: ApiV1ExternalKmsIdGet200ResponseExternalKmsExternalProviderInput = {
    credential,
    awsRegion,
    kmsKeyId,
    gcpRegion,
    keyName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
