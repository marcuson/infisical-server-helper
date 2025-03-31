# ApiV1LdapConfigPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [default to undefined]
**isActive** | **boolean** |  | [default to undefined]
**url** | **string** |  | [default to undefined]
**bindDN** | **string** |  | [default to undefined]
**bindPass** | **string** |  | [default to undefined]
**uniqueUserAttribute** | **string** |  | [optional] [default to 'uidNumber']
**searchBase** | **string** |  | [default to undefined]
**searchFilter** | **string** |  | [optional] [default to '(uid={{username}})']
**groupSearchBase** | **string** |  | [default to undefined]
**groupSearchFilter** | **string** |  | [optional] [default to '(|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))']
**caCert** | **string** |  | [optional] [default to '']

## Example

```typescript
import { ApiV1LdapConfigPostRequest } from './api';

const instance: ApiV1LdapConfigPostRequest = {
    organizationId,
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
