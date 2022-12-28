import axios, { Axios, AxiosError } from 'axios';
import iAPI from './api_interface';

export class CocAPI implements iAPI {
    private token: string;
    private url: string;

    constructor(token:string, url = "https://api.clashofclans.com/v1") {
        this.token = token;
        this.url = url;
    }

    // TODO: return data with status code
    async get(path: string): Promise <string>{
      try {
        const response:any = await axios.get(path, {
            // Accept headers required due to bug in axios 1.2.0
            headers: {
              "Accept": "application/json",
              "Accept-Encoding": "application/json",
              "Authorization": "Bearer " + this.token
            },
            baseURL: this.url
          }
        );
        return response.data;
      } catch (error) {
        // TODO:
        // error?.response?.data?.message
        // = 'Invalid authorization: API key does not allow access from IP 109.143.92.56'
        // But .message not allowed by TypeScript?

        console.error("[E] " + (error as AxiosError).response?.data);
        return `${(error as AxiosError)?.response?.data}`
      }
    }
}