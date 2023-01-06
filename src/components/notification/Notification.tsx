import { PropsWithChildren } from "react";

interface NotificationProps {
  type?: NotificationType;
}

Notification.defaultProps = {
  type: "info",
};

function Notification({
  children,
  type,
}: PropsWithChildren<NotificationProps>) {
  return <div className={`c-notification is-${type}`}>{children}</div>;
}

export default Notification;

export type NotificationType = "info" | "warning" | "success" | "danger";
