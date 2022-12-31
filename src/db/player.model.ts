import { Table, Column, Model } from "sequelize-typescript";

@Table
class Player extends Model {
  @Column
  tag: string;

  @Column
  name: string;
}
