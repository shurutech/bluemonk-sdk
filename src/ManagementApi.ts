import { ManagementApi as GeneratedManagementApi } from '../generated/src/apis/ManagementApi';
import { ApiClient } from './ApiClient';

export class ManagementApi extends GeneratedManagementApi {
  constructor() {
    super(ApiClient.instance.buildManagementConfig());
  }
}
