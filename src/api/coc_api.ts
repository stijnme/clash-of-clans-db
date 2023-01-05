import axios, { AxiosError } from "axios";
import { PlayerModel } from "../model/player/player.model";
import iAPI from "./api_interface";

export class CocAPI implements iAPI {
  private token: string;
  private url: string;

  constructor(token: string, url = "https://api.clashofclans.com/v1") {
    this.token = token;
    this.url = url;
  }

  // TODO: return data with status code
  async get(path: string): Promise<string> {
    try {
      const response: any = await axios.get(path, {
        // Accept headers required due to bug in axios 1.2.0
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "application/json",
          Authorization: "Bearer " + this.token,
        },
        baseURL: this.url,
      });
      return response.data;
    } catch (error) {
      // TODO:
      // error?.response?.data?.message
      // = 'Invalid authorization: API key does not allow access from IP 109.143.92.56'
      // But .message not allowed by TypeScript?

      console.error(
        "[E] CocAPI - " + ((error as AxiosError).response?.data as any)?.message
      );
      //      return `${(error as AxiosError)?.response?.data}`;
      return Promise.reject(error);
    }
  }

  async getPlayer(tag: string): Promise<PlayerModel> {
    let player: PlayerModel;
    try {
      const data: any = await this.get("/players/" + tag);

      // Wrap the response into our typed model
      player = {
        tag: data.tag,
        name: data.name,
        clanTag: data.clan.tag,
        apiRetrieved: true,
      };
    } catch (error) {
      player = {
        tag: tag,
        apiRetrieved: false,
      };
    }
    console.debug("[D] CocAPI - getPlayer(): " + JSON.stringify(player));
    return player;
  }
}
