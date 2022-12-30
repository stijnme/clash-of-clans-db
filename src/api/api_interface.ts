import { type } from "os";
import internal from "stream";

export default interface iAPI {
  get(path: string): Promise<string>;
}

export type apiReponse = {
  status: number;
  data: string;
};
