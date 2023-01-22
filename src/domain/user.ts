import { IMessage } from "./message";

export interface IUser {
  id: number;
  name: string;
  phone_number: string;
  profile_picture: string;
  unread?: number;
  pinned: boolean;
  messages: Record<string, IMessage[]>;
}
