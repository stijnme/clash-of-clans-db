import { PlayerModel } from "../model/player/player.model";

export default interface iAPI {
  get(path: string): Promise<string>;
  getPlayer(tag: string): Promise<PlayerModel>;
}
