import { fetchClientFunction, IClient, IConfig } from '@/api/types/api.types';

export const fetchData: fetchClientFunction = async (endpoint, payload) => {
  const { body, ...customConfig } = payload ?? {};
  const headers = {
    'Content-Type': 'application/json',
  };
  const config: IConfig = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    }
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(endpoint, config);

    if (!response.ok) {
      return Promise.reject('Failed to fetch');
    }
    return await response.json();

  } catch (e) {
    return Promise.reject((e as Error).message);
  }
};

export const client: IClient = {
  get: (endPoint, payload) => {
    return fetchData(endPoint, payload)
  },
  post: (endPoint, payload) => {
    return fetchData(endPoint, { ...payload, method: 'POST' })
  },
  del: (endPoint, payload) => {
    return fetchData(endPoint, { ...payload, method: 'DELETE' })
  },
  patch: (endPoint, payload) => {
    return fetchData(endPoint, { ...payload, method: 'PATCH' })
  },
}
