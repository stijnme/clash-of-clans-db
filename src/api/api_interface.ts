import { PlayerModel } from "../model/playerModel";

export default interface iAPI {
  get(path: string): Promise<string>;
  getPlayer(tag: string): Promise<PlayerModel>;
}
