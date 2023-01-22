import { IMessage, STATUS } from "../domain/message";
import MessageNotification from "./notification/MessageNotification";
import { ReactComponent as LockIcon } from "../assets/icons/lock.svg";
import Message from "./Message";

interface MessageListProps {
  messages: Record<string, IMessage[]>;
}

function MessageList({ messages }: MessageListProps) {
  return (
    <div className="u-flex u-f-column">
      {Object.keys(messages).map((group, index) => (
        <div className="u-flex u-f-column" key={`${group}-${index}`}>
          <MessageNotification>{group}</MessageNotification>

          {index === 0 && (
            <MessageNotification type="warning">
              <p>
                <LockIcon className="u-mr-1" />
                Messages are end-to-end encrypted. No one outside of this chat,
                not even WhatsApp, can read or listen to them. Click to learn
                more.
              </p>
            </MessageNotification>
          )}

          {messages[group].map((message, index) => (
            <Message
              key={`${message}-${index}`}
              type={message.sender ? "secondary" : "primary"}
              time={message.time}
              seen={message.status === STATUS.READ}
            >
              <p>{message.content}</p>
            </Message>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
