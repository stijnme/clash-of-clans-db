import axios, { AxiosError } from "axios";
import { PlayerModel, PlayerAchievement } from "../model/player/player.model";
import { ClanModel } from "../model/clan/clan.model";
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
      path = path.replace("#", "%23");
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
      // Lookup Clan Game points
      const clanGameScore = data.achievements.filter(
        (achievement: PlayerAchievement) => {
          // TODO: Make constant of achievement name
          return achievement.name === "Games Champion";
        }
      )[0].value;

      // Wrap the response into our typed model
      player = {
        tag: data.tag,
        name: data.name,
        clanTag: data.clan.tag,
        donations: data.donations,
        donationsReceived: data.donationsReceived,
        townHallLevel: data.townHallLevel,
        warPreference: data.warPreference,
        clanGames: clanGameScore,
        retrievalTimestamp: new Date(),
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

  async getClan(tag: string): Promise<ClanModel> {
    let clan: ClanModel;
    try {
      console.debug("[D] CocAPI - getClan: /clans/" + tag);
      const data: any = await this.get("/clans/" + tag);
      clan = {
        tag: data.tag,
        name: data.name,
        memberList: data.memberList,
        apiRetrieved: true,
      };
    } catch (error) {
      clan = { tag: tag, apiRetrieved: false };
    }
    console.debug("[D] CocAPI - getClan(): " + JSON.stringify(clan));
    return clan;
  }
}
