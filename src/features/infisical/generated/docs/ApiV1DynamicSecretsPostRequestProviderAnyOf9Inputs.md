# ApiV1DynamicSecretsPostRequestProviderAnyOf9Inputs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **string** |  | [default to undefined]
**port** | **number** |  | [optional] [default to undefined]
**username** | **string** |  | [default to undefined]
**password** | **string** |  | [default to undefined]
**database** | **string** |  | [default to undefined]
**ca** | **string** |  | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** | Enum: \&quot;atlasAdmin\&quot; \&quot;backup\&quot; \&quot;clusterMonitor\&quot; \&quot;dbAdmin\&quot; \&quot;dbAdminAnyDatabase\&quot; \&quot;enableSharding\&quot; \&quot;read\&quot; \&quot;readAnyDatabase\&quot; \&quot;readWrite\&quot; \&quot;readWriteAnyDatabase\&quot; \&quot;&lt;a custom role name&gt;\&quot;.Human-readable label that identifies a group of privileges assigned to a database user. This value can either be a built-in role or a custom role. | [default to undefined]

## Example

```typescript
import { ApiV1DynamicSecretsPostRequestProviderAnyOf9Inputs } from './api';

const instance: ApiV1DynamicSecretsPostRequestProviderAnyOf9Inputs = {
    host,
    port,
    username,
    password,
    database,
    ca,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
