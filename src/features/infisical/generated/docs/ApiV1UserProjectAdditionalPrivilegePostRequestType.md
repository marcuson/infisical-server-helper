# ApiV1UserProjectAdditionalPrivilegePostRequestType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isTemporary** | **boolean** |  | [default to undefined]
**temporaryMode** | **string** | Type of temporary access given. Types: relative. | [default to undefined]
**temporaryRange** | **string** | TTL for the temporary time. Eg: 1m, 1h, 1d. | [default to undefined]
**temporaryAccessStartTime** | **string** | ISO time for which temporary access should begin. | [default to undefined]

## Example

```typescript
import { ApiV1UserProjectAdditionalPrivilegePostRequestType } from './api';

const instance: ApiV1UserProjectAdditionalPrivilegePostRequestType = {
    isTemporary,
    temporaryMode,
    temporaryRange,
    temporaryAccessStartTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
