import axios, { Method } from "axios";

const API_ENDPOINT = "http://localhost:8080";

interface IApiConfig {
  method: Method;
  url: string;
  baseURL?: string;
  data?: any;
  params?: { [index: string]: string | number | boolean };
  headers?: object;
}

export const callApiPost = (sagaConfig: IApiConfig) => {
  return axios({ ...sagaConfig, baseURL: sagaConfig.baseURL || API_ENDPOINT });
};
