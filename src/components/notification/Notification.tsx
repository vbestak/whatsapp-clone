import { PropsWithChildren } from "react";
import { getModifierClass } from "../../util/css";

interface NotificationProps {
  type?: NotificationType;
  modifiers?: NotificationModifiers[];
}

Notification.defaultProps = {
  type: "info",
  modifiers: [],
};

function Notification({
  children,
  type,
  modifiers = [],
}: PropsWithChildren<NotificationProps>) {
  return (
    <div
      className={`c-notification is-${type} ${getModifierClass(
        "c-notification",
        modifiers
      )}`}
    >
      {children}
    </div>
  );
}

export default Notification;

export type NotificationType = "info" | "warning" | "success" | "danger";
export type NotificationModifiers = "message";
