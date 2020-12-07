import axios, { AxiosError, AxiosResponse, Method } from 'axios';
import { debug } from './debugging';
import { camelize } from './string';

const BASE_URL = 'http://localhost:8000/api';

const client = axios.create({
  baseURL: BASE_URL,
  // timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

interface Params<D, R> {
  method: Method,
  endpoint: string,
  data?: D;
  onSucceed?: (response: R) => void;
  onFailed?: (response: AxiosResponse | AxiosError) => void;
}

export const sendRequest = <D, R>(params: Params<D, R>) => {
  const { method, endpoint, data, onSucceed, onFailed } = params;

  client.request<D, AxiosResponse>({
    method: method,
    url: `${BASE_URL}/${endpoint}`,
    data: data,
  })

    // Succeed
    .then(response => {
      debug(response);

      if (response.status === 200) {
        if (onSucceed) onSucceed(response.data)

      } else {
        if (onFailed) onFailed(response);
      }
    })

    // Fail
    .catch((response: AxiosError) => {
      debug(response);

      if (onFailed) onFailed(response);
    });
}

