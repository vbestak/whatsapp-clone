import getRandomSentence from "./sentenceGen";
import { getRandomImage } from "../util/img";
import { IUser } from "../domain/user";
import { STATUS } from "../domain/message";

export const users: IUser[] = [
  {
    id: 1,
    name: "Hank Hill",
    phone_number: "+385988999577",
    profile_picture: getRandomImage(50, 50, 1),
    unread: 3,
    pinned: true,
    messages: {
      "01/01/2023": [
        {
          content: getRandomSentence(),
          sender: 1,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 1,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      TODAY: [
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:10",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "09:12",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:12",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:13",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "09:20",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "09:21",
          status: STATUS.DEFAULT,
        },
      ],
    },
  },
  {
    id: 2,
    name: "Luanne Platter",
    phone_number: "+3859464399489",
    profile_picture: getRandomImage(50, 50, 2),
    pinned: false,
    messages: {
      "22/12/2022": [
        {
          content: getRandomSentence(),
          sender: 2,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 2,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 2,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 2,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      TODAY: [
        {
          content: getRandomSentence(),
          sender: 2,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 2,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
      ],
    },
  },
  {
    id: 3,
    name: "Bobby Hill",
    phone_number: "+3859122493112",
    profile_picture: getRandomImage(50, 50, 3),
    pinned: false,
    messages: {
      "01/01/2023": [
        {
          content: getRandomSentence(),
          sender: 3,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 3,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 3,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 3,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      TODAY: [
        {
          content: getRandomSentence(),
          sender: 3,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 3,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: 3,
          time: "09:12",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:13",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.DEFAULT,
        },
      ],
    },
  },
  {
    id: 4,
    name: "Dale Gribble",
    phone_number: "+3859616370223",
    profile_picture: getRandomImage(50, 50, 4),
    unread: 1,
    pinned: false,
    messages: {
      "07/07/2022": [
        {
          content: getRandomSentence(),
          sender: 4,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 4,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      TODAY: [
        {
          content: getRandomSentence(),
          sender: 4,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
      ],
    },
  },
  {
    id: 5,
    name: "Peggy Hill",
    phone_number: "+3859378964886",
    profile_picture: getRandomImage(50, 50, 5),
    pinned: false,
    messages: {
      "05/01/2022": [
        {
          content: getRandomSentence(),
          sender: 5,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 5,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 5,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 5,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      TODAY: [
        {
          content: getRandomSentence(),
          sender: 5,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 5,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
    },
  },
  {
    id: 6,
    name: "Bill Dauterive",
    phone_number: "+385988869957",
    profile_picture: getRandomImage(50, 50, 6),
    unread: 3,
    pinned: false,
    messages: {
      "12/12/2022": [
        {
          content: getRandomSentence(),
          sender: 6,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 6,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      TODAY: [
        {
          content: getRandomSentence(),
          sender: 6,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
      ],
    },
  },
  {
    id: 7,
    name: "Lucky",
    phone_number: "+3859953982010",
    profile_picture: getRandomImage(50, 50, 7),
    pinned: false,
    messages: {
      "04/12/2022": [
        {
          content: getRandomSentence(),
          sender: 8,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 7,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 7,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 7,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      TODAY: [
        {
          content: getRandomSentence(),
          sender: 7,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 7,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
    },
  },
  {
    id: 8,
    name: "Kahn Souphanousinphone",
    phone_number: "+3859859532529",
    profile_picture: getRandomImage(50, 50, 8),
    pinned: false,
    messages: {
      "04/12/2022": [
        {
          content: getRandomSentence(),
          sender: 8,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 8,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 8,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 8,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
      TODAY: [
        {
          content: getRandomSentence(),
          sender: 8,
          time: "08:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15",
          status: STATUS.READ,
        },
        {
          content: getRandomSentence(),
          sender: 8,
          time: "09:11",
          status: STATUS.DEFAULT,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15",
          status: STATUS.READ,
        },
      ],
    },
  },
];
