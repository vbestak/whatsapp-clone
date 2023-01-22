import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrow-down.svg";
import { ReactComponent as PinnedIcon } from "../assets/icons/pinned.svg";
import { ReactComponent as SeenIcon } from "../assets/icons/seen.svg";
import { ReactComponent as NotSeenIcon } from "../assets/icons/notSeen.svg";
import { STATUS } from "../domain/message";
import { IUser } from "../domain/user";

interface ContactCardProps {
  user: IUser;
}

function ContactCard({ user }: ContactCardProps) {
  const { pinned, unread, name, profile_picture } = user;
  const lastMessage = user.messages.TODAY[user.messages.TODAY.length - 1];

  function getNewMessagesCount(): string | null {
    const MAX_MESSAGES = 9;

    if (!unread) return null;

    if (unread > MAX_MESSAGES) {
      return `${MAX_MESSAGES}+`;
    }
    return `${unread}`;
  }

  function getSeenIcon(): JSX.Element | undefined {
    let icon;

    if (lastMessage.sender !== null) return;

    switch (lastMessage.status) {
      case STATUS.DEFAULT:
        icon = <NotSeenIcon color="#B3B3B3" />;
        break;
      case STATUS.READ:
        icon = <SeenIcon color="#0DA9E5" />;
        break;
    }

    return (
      <div className="u-flex--base u-h-center u-v-center u-mr-1">{icon}</div>
    );
  }

  return (
    <div className="c-contact">
      <div className="c-contact__avatar u-shrink:0">
        <img src={profile_picture} />
      </div>

      <div className="c-contact__data">
        <div className="u-flex u-h-between">
          <div className="c-contact__name">{name}</div>
          <div className="c-contact__time">{lastMessage.time}</div>
        </div>

        <div className="u-flex u-h-between">
          <div className="c-contact__message ">
            {getSeenIcon()}

            <p className="u-text-overflow">{lastMessage.content}</p>
          </div>

          <div className="c-contact__icons">
            {pinned && <PinnedIcon color="#B3B3B3" />}

            {unread && (
              <span className="c-contact__icons_unread">
                {getNewMessagesCount()}
              </span>
            )}

            <ArrowDownIcon color="#B3B3B3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
