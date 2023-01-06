import Notification, { NotificationType } from "../Notification";

interface SidebarNotificationProps {
  icon: JSX.Element;
  title: string;
  info: string;
  type?: NotificationType;
}

function SidebarNotification({
  icon,
  title,
  info,
  type,
}: SidebarNotificationProps) {
  return (
    <Notification type={type}>
      <div className="u-flex">
        <div className="c-notification__icon">{icon}</div>

        <div className="c-notification__data">
          <p className="c-notification__data_title">{title}</p>
          <p className="c-notification__data_info">{info}</p>
        </div>
      </div>
    </Notification>
  );
}

export default SidebarNotification;
