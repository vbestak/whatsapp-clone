import { IUser } from "./user";

export enum STATUS {
  DEFAULT,
  READ,
}

export interface IMessage {
  content: string;
  sender: IUser["id"];
  time: string;
  status: STATUS;
}
