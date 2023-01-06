import SearchInput from "./SearchInput";
import { getRandomImage } from "../util/img";
import { ReactComponent as StatusIcon } from "../assets/status.svg";
import { ReactComponent as ElipsisIcon } from "../assets/elipsis.svg";
import { ReactComponent as MessageIcon } from "../assets/message.svg";
import NewMessagesNotification from "./notification/sidebar/NewMessagesNotification";
import ContactCard from "./ContactCard";

function Sidebar() {
  return (
    <aside className="c-sidebar">
      <header className="c-sidebar__header">
        <div className="c-sidebar__header_avatar">
          <img src={getRandomImage(50, 50)} />
        </div>

        <div className="c-sidebar__header_actions">
          <button>
            <StatusIcon color="#919191" />
          </button>

          <button>
            <MessageIcon color="#919191" />
          </button>

          <button>
            <ElipsisIcon color="#919191" />
          </button>
        </div>
      </header>

      <div className="c-sidebar__notification">
        <NewMessagesNotification />
      </div>

      <div className="c-sidebar__searchContainer">
        <SearchInput />
      </div>

      <div className="c-sidebar__contactList">
        <ContactCard pinned newMessages={3} />
        <ContactCard newMessages={55} />
        <ContactCard seen />
        <ContactCard />
        <ContactCard notSeen />
        <ContactCard />
      </div>
    </aside>
  );
}

export default Sidebar;
