import { PropsWithChildren } from "react";
import { getModifierClass } from "../util/css";
import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrow-down.svg";

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
      <span className="c-message__content">{children}</span>

      <span className="c-message__infoWrapper">
        <span className="c-message__info">
          <span>09:35</span>
        </span>
      </span>

      <button className="c-message__details">
        <ArrowDownIcon />
      </button>
    </div>
  );
}

export default Message;
