import { Configuration } from '../generated/src/runtime';

interface AuthEntry {
  apiKey: string;
}

export class ApiClient {
  private static _instance: ApiClient;

  basePath: string = '';
  authentications: Record<string, AuthEntry> = {
    integration_api_key: { apiKey: '' },
    management_api_key: { apiKey: '' },
  };

  static get instance(): ApiClient {
    if (!ApiClient._instance) {
      ApiClient._instance = new ApiClient();
    }
    return ApiClient._instance;
  }

  buildIntegrationConfig(): Configuration {
    const apiKey = this.authentications['integration_api_key'].apiKey;
    return new Configuration({
      basePath: this.basePath,
      apiKey,
    });
  }

  buildManagementConfig(): Configuration {
    const apiKey = this.authentications['management_api_key'].apiKey;
    return new Configuration({
      basePath: this.basePath,
      apiKey,
    });
  }
}
