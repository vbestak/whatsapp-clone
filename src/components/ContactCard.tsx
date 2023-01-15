import { getRandomImage } from "../util/img";
import { ReactComponent as ArrowDownIcon } from "../assets/icons/arrow-down.svg";
import { ReactComponent as PinnedIcon } from "../assets/icons/pinned.svg";
import { ReactComponent as SeenIcon } from "../assets/icons/seen.svg";
import { ReactComponent as NotSeenIcon } from "../assets/icons/notSeen.svg";

interface ContactCardProps {
  seen?: boolean;
  notSeen?: boolean;
  pinned?: boolean;
  newMessages?: number;
}

function ContactCard({ seen, notSeen, pinned, newMessages }: ContactCardProps) {
  function getNewMessagesCount(): string | null {
    const MAX_MESSAGES = 9;

    if (!newMessages) return null;

    if (newMessages > MAX_MESSAGES) {
      return `${MAX_MESSAGES}+`;
    }
    return `${newMessages}`;
  }

  function getSeenIcon(): JSX.Element | undefined {
    let icon;

    if (notSeen) icon = <NotSeenIcon color="#B3B3B3" />;
    if (seen) icon = <SeenIcon color="#0DA9E5" />;

    if (icon) {
      return (
        <div className="u-flex--base u-h-center u-v-center u-mr-1">{icon}</div>
      );
    }
  }

  return (
    <div className="c-contact">
      <div className="c-contact__avatar u-shrink:0">
        <img src={getRandomImage()} />
      </div>

      <div className="c-contact__data">
        <div className="u-flex u-h-between">
          <div className="c-contact__name">Contact name</div>
          <div className="c-contact__time">09:15</div>
        </div>

        <div className="u-flex u-h-between">
          <div className="c-contact__message ">
            {getSeenIcon()}

            <p className="u-text-overflow">
              Last messageLast messageLast messageLast messageLast
              messageLasteLast
            </p>
          </div>

          <div className="c-contact__icons">
            {pinned && <PinnedIcon color="#B3B3B3" />}

            {newMessages && (
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
