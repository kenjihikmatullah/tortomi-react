import axios, { AxiosError, AxiosResponse, Method } from 'axios';
import { debug } from './debugging';

const BASE_URL = 'localhost:8000';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export interface SuccessfulResponse<T> {
  message: string;
  data: T;
}

export interface FailedResponse {
  code: number;
  message: string;
}

interface Params<D, R> {
  method: Method,
  endpoint: string,
  data?: D;
  onSucceed?: (response: SuccessfulResponse<R>) => void;
  onFailed?: (response: FailedResponse) => void;
}

export const sendRequest = <D, R>(params: Params<D, R>) => {
  const { method, endpoint, data, onSucceed, onFailed } = params;

  axios.request<D, AxiosResponse<SuccessfulResponse<R>>>({
    method: method,
    url: `${BASE_URL}/${endpoint}`,
    data: data
  })

    // Succeed
    .then(response => {
      debug(response);

      if (response.status == 200) {
        if (onSucceed) onSucceed(response.data);

      } else {
        if (onFailed) onFailed({
          code: response.status,
          message: response.data.message
        });
      }
    })

    // Fail
    .catch((response: AxiosError<FailedResponse>) => {
      debug(response);

      if (onFailed) onFailed({
        code: parseInt(response.code ?? "500"),
        message: response.message
      });
    });
}

