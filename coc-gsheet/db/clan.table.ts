import { Table, Column, Model } from "sequelize-typescript";

@Table
export default class Clan extends Model {
  @Column
  declare tag: string;
  @Column
  declare name: string;
  @Column
  declare type: string;
  @Column
  declare description: string;
}
