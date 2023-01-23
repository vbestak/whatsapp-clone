import { ReactComponent as ElipsisIcon } from "../assets/icons/elipsis.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as SmileyIcon } from "../assets/icons/smiley.svg";
import { ReactComponent as AttachIcon } from "../assets/icons/attach.svg";
import { ReactComponent as MicrophoneIcon } from "../assets/icons/microphone.svg";
import { useMatch } from "react-router-dom";
import { useUsersContext } from "../context/usersContext";
import MessageList from "../components/MessageList";
import { useEffect, useRef, useState } from "react";

function User() {
  const match = useMatch("/:id");

  const messageBodyRef = useRef<HTMLDivElement>(null);

  const { getUserById, markMessagesAsRead, sendMessage } = useUsersContext();
  const selectedUser = getUserById(match?.params.id as string);

  const [message, setMessage] = useState("");

  useEffect(() => {
    markMessagesAsRead(match?.params.id as string);
  }, [match?.params.id]);

  useEffect(() => {
    if (!messageBodyRef.current) return;

    messageBodyRef.current.scrollTop = messageBodyRef.current.scrollHeight;
  });

  if (!selectedUser) return <div />;

  return (
    <div className="s-userChat">
      <header className="s-userChat__header">
        <div className="s-userChat__header_avatar">
          <img src={selectedUser.profile_picture} />
        </div>

        <div className="s-userChat__header_userInfo">
          <h3 className="s-userChat__header_userName u-text-overflow">
            {selectedUser.name}
          </h3>
          <p className="s-userChat__header_userStatus u-text-overflow">
            online
          </p>
        </div>

        <div className="s-userChat__header_actions">
          <button>
            <SearchIcon width={30} height={30} color="#919191FF" />
          </button>

          <button>
            <ElipsisIcon color="#919191FF" />
          </button>
        </div>
      </header>

      <div className="s-userChat__body">
        <div className="s-userChat__body_content" ref={messageBodyRef}>
          <MessageList messages={selectedUser.messages} />
        </div>
      </div>

      <div className="s-userChat__footer">
        <button>
          <SmileyIcon width={22} height={22} />
        </button>

        <button>
          <AttachIcon width={22} height={22} />
        </button>

        <input
          className="e-input"
          onKeyPress={(e) => {
            if (e.key !== "Enter") return;
            if (!selectedUser?.id) return;

            sendMessage(selectedUser?.id, message);
            setMessage("");
          }}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Type a message"
        />

        <button>
          <MicrophoneIcon width={22} height={22} />
        </button>
      </div>
    </div>
  );
}

export default User;
