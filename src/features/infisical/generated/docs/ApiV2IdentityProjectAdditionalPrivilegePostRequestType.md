# ApiV2IdentityProjectAdditionalPrivilegePostRequestType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isTemporary** | **boolean** |  | [default to undefined]
**temporaryMode** | **string** | Type of temporary access given. Types: relative. | [default to undefined]
**temporaryRange** | **string** | The TTL for the temporary access given. Eg: 1m, 1h, 1d. | [default to undefined]
**temporaryAccessStartTime** | **string** | The start time in ISO format when the temporary access should begin. | [default to undefined]

## Example

```typescript
import { ApiV2IdentityProjectAdditionalPrivilegePostRequestType } from './api';

const instance: ApiV2IdentityProjectAdditionalPrivilegePostRequestType = {
    isTemporary,
    temporaryMode,
    temporaryRange,
    temporaryAccessStartTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
