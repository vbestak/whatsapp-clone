import { createContext, PropsWithChildren, useContext, useState } from "react";
import { users as defaultUsers } from "../data/users";
import { IUser } from "../domain/user";
import { IMessage, STATUS } from "../domain/message";

const UsersContext = createContext<{
  users: IUser[];
  getUserById: (id: string) => IUser | undefined;
  markMessagesAsRead: (id: string) => void;
  sendMessage: (receiverId: number, content: string) => void;
}>({
  users: [],
  getUserById: (id: string) => undefined,
  markMessagesAsRead: (id: string) => {},
  sendMessage: (receiverId: number, content: string) => {},
});

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState(defaultUsers);
  const currentUser = null;

  function markMessagesAsRead(userId: string): void {
    const userIndex = users.findIndex((user) => user.id.toString() === userId);

    if (userIndex < 0) return;

    const newUser = users[userIndex];
    delete newUser.unread;

    Object.values(newUser.messages).forEach((group) => {
      group.forEach((message) => {
        if (message.sender !== currentUser) message.status = STATUS.READ;
      });
    });

    const newUsers = [...users];
    newUsers[userIndex] = newUser;

    setUsers(newUsers);
  }

  function sendMessage(receiverId: number, content: string): void {
    const message: IMessage = {
      content,
      sender: currentUser,
      time: new Intl.DateTimeFormat("en-GB", {
        timeStyle: "short",
      }).format(Date.now()),
      status: STATUS.DEFAULT,
    };

    setUsers((users) => {
      const receiver = users.find((user) => user.id === receiverId);
      if (!receiver) return users;

      receiver.messages["TODAY"].push(message);
      return [...users];
    });
  }

  function getUserById(userId: string): IUser | undefined {
    return users.find((user) => user.id.toString() === userId);
  }

  return (
    <UsersContext.Provider
      value={{ users, getUserById, markMessagesAsRead, sendMessage }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { useUsersContext, UsersProvider };
