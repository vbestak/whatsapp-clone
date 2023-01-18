import { PropsWithChildren } from "react";
import { getModifierClass } from "../util/css";

type MessageType = "primary" | "secondary";

interface MessageProps {
  type?: MessageType;
}

function Message({
  type = "primary",
  children,
}: PropsWithChildren<MessageProps>) {
  return (
    <div className={`c-message ${getModifierClass("c-message", [type])}`}>
      {children}
    </div>
  );
}

export default Message;
