import axios from 'axios';

export class CocAPI {
    private token: string;
    private url: string;

    constructor(token:string, url = "https://api.clashofclans.com/v1") {
        this.token = token;
        this.url = url;
    }

    async get(path: string): Promise <string>{
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
    }
}