# ApiV1DynamicSecretsPostRequestProviderAnyOf7InputsRolesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collectionName** | **string** | Collection on which this role applies. | [optional] [default to undefined]
**databaseName** | **string** | Database to which the user is granted access privileges. | [default to undefined]
**roleName** | **string** |  Enum: \&quot;atlasAdmin\&quot; \&quot;backup\&quot; \&quot;clusterMonitor\&quot; \&quot;dbAdmin\&quot; \&quot;dbAdminAnyDatabase\&quot; \&quot;enableSharding\&quot; \&quot;read\&quot; \&quot;readAnyDatabase\&quot; \&quot;readWrite\&quot; \&quot;readWriteAnyDatabase\&quot; \&quot;&lt;a custom role name&gt;\&quot;.Human-readable label that identifies a group of privileges assigned to a database user. This value can either be a built-in role or a custom role. | [default to undefined]

## Example

```typescript
import { ApiV1DynamicSecretsPostRequestProviderAnyOf7InputsRolesInner } from './api';

const instance: ApiV1DynamicSecretsPostRequestProviderAnyOf7InputsRolesInner = {
    collectionName,
    databaseName,
    roleName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
