# ApiV1LdapConfigPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isActive** | **boolean** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**bindDN** | **string** |  | [optional] [default to undefined]
**bindPass** | **string** |  | [optional] [default to undefined]
**uniqueUserAttribute** | **string** |  | [optional] [default to undefined]
**searchBase** | **string** |  | [optional] [default to undefined]
**searchFilter** | **string** |  | [optional] [default to undefined]
**groupSearchBase** | **string** |  | [optional] [default to undefined]
**groupSearchFilter** | **string** |  | [optional] [default to undefined]
**caCert** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [default to undefined]

## Example

```typescript
import { ApiV1LdapConfigPatchRequest } from './api';

const instance: ApiV1LdapConfigPatchRequest = {
    isActive,
    url,
    bindDN,
    bindPass,
    uniqueUserAttribute,
    searchBase,
    searchFilter,
    groupSearchBase,
    groupSearchFilter,
    caCert,
    organizationId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
