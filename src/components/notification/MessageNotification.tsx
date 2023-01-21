import Notification from "./Notification";
import { PropsWithChildren } from "react";

interface MessageNotificationProps {
  type?: "info" | "warning";
}

MessageNotification.defaultProps = {
  type: "info",
};

function MessageNotification({
  type,
  children,
}: PropsWithChildren<MessageNotificationProps>) {
  return (
    <Notification type={type} modifiers={["message"]}>
      {children}
    </Notification>
  );
}

export default MessageNotification;
