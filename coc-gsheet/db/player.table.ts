import { Table, Column, Model } from "sequelize-typescript";

@Table
export default class Player extends Model {
  @Column
  declare tag: string;
  @Column
  declare name: string;
  @Column
  declare clanTag: string;
  @Column
  declare townHallLevel: number;
  @Column
  declare warPreference: string;
  @Column
  declare donations: number;
  @Column
  declare donationsReceived: number;
}
