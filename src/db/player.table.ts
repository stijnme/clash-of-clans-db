import { Table, Column, Model } from "sequelize-typescript";

@Table
export default class Player extends Model {
  @Column
  declare tag: string;

  @Column
  declare name: string;

  @Column
  declare clanTag: string;
}
