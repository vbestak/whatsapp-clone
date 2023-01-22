import SearchInput from "./SearchInput";
import { getRandomImage } from "../util/img";
import { ReactComponent as StatusIcon } from "../assets/icons/status.svg";
import { ReactComponent as ElipsisIcon } from "../assets/icons/elipsis.svg";
import { ReactComponent as MessageIcon } from "../assets/icons/message.svg";
import NewMessagesNotification from "./notification/sidebar/NewMessagesNotification";
import ContactCard from "./ContactCard";
import { useUsersContext } from "../context/usersContext";
import { Link } from "react-router-dom";

function Sidebar() {
  const { users } = useUsersContext();

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
        {users?.map((user) => (
          <Link key={`${user.id}-${user.name}`} to={`/${user.id}`}>
            <ContactCard user={user} />
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
