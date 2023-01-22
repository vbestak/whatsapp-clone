import { PropsWithChildren } from "react";
import { getModifierClass } from "../util/css";
import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrow-down.svg";
import { ReactComponent as SeenIcon } from "../assets/icons/seen.svg";
import { ReactComponent as NotSeenIcon } from "../assets/icons/notSeen.svg";

type MessageType = "primary" | "secondary";

interface MessageProps {
  time: string;
  type?: MessageType;
  seen?: boolean;
}

function Message({
  time,
  type = "primary",
  seen,
  children,
}: PropsWithChildren<MessageProps>) {
  return (
    <div className={`c-message ${getModifierClass("c-message", [type])}`}>
      <span className="c-message__content">{children}</span>

      <span className="c-message__infoWrapper">
        <span className="c-message__info">
          <span className="c-message__info_time">{time}</span>

          <span className="c-message__info_status">
            {seen ? <SeenIcon color="#0DA9E5" /> : <NotSeenIcon />}
          </span>
        </span>
      </span>

      <button className="c-message__details">
        <ArrowDownIcon />
      </button>
    </div>
  );
}

export default Message;
