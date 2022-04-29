import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import ServiceConfig from "./ServiceConfig";
import FormData from "form-data";
import { createReadStream, existsSync } from "fs";

const SERVICE_NAME = "ussd";

export default class Ussd {
  apiKey: string;
  sandbox: boolean;

  constructor(apiKey: string, sandbox = true) {
    this.apiKey = apiKey;
    this.sandbox = sandbox;
  }

  async deploy(appId: string, archivePath: string) {
    const ussdConfigs = ServiceConfig(SERVICE_NAME, this.sandbox);

    if (!existsSync(archivePath)) {
      return `[error]: archive not found at the path: ${archivePath}`;
    }

    const data = new FormData();
    data.append("app", createReadStream(archivePath));

    const config: AxiosRequestConfig = {
      url: `${ussdConfigs.baseUrl}/apps/${appId}/${ussdConfigs.path}`,
      method: "PUT",
      headers: {
        api_key: "AC48Eo9MI2vT5QDUCo1p62wQMFRLjdg1JEKwtf8CJNzWa2Kt2L",
        ...data.getHeaders(),
      },
      data,
      timeout: 30000,
    };

    try {
      const httpResponse: AxiosResponse = await axios(config);
      return httpResponse.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
      throw error;
    }
  }
}
