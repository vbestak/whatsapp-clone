import { ReactComponent as NotificationIcon } from "../../../assets/notification.svg";
import SidebarNotification from "./SidebarNotification";

function NewMessagesNotification() {
  return (
    <SidebarNotification
      type="info"
      icon={<NotificationIcon color="white" />}
      title="Get notified of new messages"
      info="Turn on your notifications"
    />
  );
}

export default NewMessagesNotification;
