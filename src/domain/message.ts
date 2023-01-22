export enum STATUS {
  DEFAULT,
  READ,
}

export interface IMessage {
  content: string;
  sender: number | null;
  time: string;
  status: STATUS;
}
