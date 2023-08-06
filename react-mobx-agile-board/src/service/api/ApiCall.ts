import queryString from 'query-string';
import {IPerform} from '../../types/ApiCall';
import {DOMAIN} from "../utils/DOMAIN";

class ApiCall {
  constructor(private domain: string) {
  }

  perform = async ({url, data, config}: IPerform) => {
    const request = await fetch(`${this.domain}/${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    return await request.json();
  }

  get = async (path: string, searchParams = {}) => {
    return await this.perform({
      url: `${path}?${queryString.stringify(searchParams)}`
    });
  }

  post = async (path: string, payload: {}) => {
    return await this.perform({
      url: path, data: payload,
      config: {
        method: "POST",
      }
    })
  }

  put = async (path: string, payload: {}) => {
    return await this.perform({
      url: path, data: payload,
      config: {
        method: "PUT",
      }
    })
  }

  delete = async (path: string) => {
    return await this.perform({
      url: path,
      config: {
        method: "DELETE",
      }
    })
  }
}

export default new ApiCall(DOMAIN);
