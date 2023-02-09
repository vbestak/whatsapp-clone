import { createContext, PropsWithChildren, useContext, useState } from "react";
import { users as defaultUsers } from "../data/users";
import { IUser } from "../domain/user";
import { IMessage, STATUS } from "../domain/message";

const UsersContext = createContext<{
  users: IUser[];
  getUserById: (id: IUser["id"]) => IUser | undefined;
  markMessagesAsRead: (id: IUser["id"]) => void;
  sendMessage: (receiverId: IUser["id"], content: IMessage["content"]) => void;
  setSearchTerm: (term: string) => void;
}>({
  users: [],
  getUserById(id: IUser["id"]): IUser | undefined {
    return undefined;
  },
  markMessagesAsRead(id: IUser["id"]): void {},
  sendMessage(receiverId: IUser["id"], content: IMessage["content"]): void {},
  setSearchTerm(term: string): void {},
});

const useUsersContext = () => useContext(UsersContext);
export const CURRENT_USER_ID: IUser["id"] = 0 as const;

const UsersProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState(defaultUsers);
  const [searchTerm, setSearchTerm] = useState("");

  function markMessagesAsRead(userId: IUser["id"]): void {
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex < 0) return;

    const updatedUser = users[userIndex];
    delete updatedUser.unread;

    Object.values(updatedUser.messages).forEach((group) => {
      group.forEach((message) => {
        if (message.sender !== CURRENT_USER_ID) message.status = STATUS.READ;
      });
    });

    const updatedUsers = [...users];
    updatedUsers[userIndex] = updatedUser;

    setUsers(updatedUsers);
  }

  function sendMessage(
    receiverId: IUser["id"],
    content: IMessage["content"]
  ): void {
    const message: IMessage = {
      content,
      sender: CURRENT_USER_ID,
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

  function getUserById(userId: IUser["id"]): IUser | undefined {
    return users.find((user) => user.id === userId);
  }

  function getFilteredUsers(): IUser[] {
    return users.filter((user) => {
      return `${user.name}${user.phone_number}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  }

  return (
    <UsersContext.Provider
      value={{
        users: getFilteredUsers(),
        getUserById,
        markMessagesAsRead,
        sendMessage,
        setSearchTerm,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { useUsersContext, UsersProvider };
