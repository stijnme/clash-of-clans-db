export interface PlayerModel {
  tag: string;
  name?: string;
  clanTag?: string;
  donations?: number;
  donationsReceived?: number;
  townHallLevel?: number;
  warPreference?: string;
  clanGames?: number;
  retrievalTimestamp?: Date;
  apiRetrieved: boolean;
}

export interface PlayerAchievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string;
  village: string; // TODO: define possible values in a type: "home" | "???"
}
