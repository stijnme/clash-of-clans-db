import { Table, Column, Model } from "sequelize-typescript";

@Table
export default class Player extends Model {
  @Column
  tag: string;

  @Column
  name: string;

  @Column
  clanTag: string;
}
