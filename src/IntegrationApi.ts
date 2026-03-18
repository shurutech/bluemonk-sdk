import { IntegrationApi as GeneratedIntegrationApi } from '../generated/src/apis/IntegrationApi';
import { ApiClient } from './ApiClient';

export class IntegrationApi extends GeneratedIntegrationApi {
  constructor() {
    super(ApiClient.instance.buildIntegrationConfig());
  }
}
