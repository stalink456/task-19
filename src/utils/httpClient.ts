import axios from 'axios';
import { Method } from 'api/types';

export default class HttpClient {
  static async call<T>(method: Method, url: string, data: null | T = null) {
    const response = await axios({
      method,
      url,
      data,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  }
}
