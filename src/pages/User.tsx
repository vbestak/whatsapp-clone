import { getRandomImage } from "../util/img";
import { ReactComponent as ElipsisIcon } from "../assets/icons/elipsis.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as SmileyIcon } from "../assets/icons/smiley.svg";
import { ReactComponent as AttachIcon } from "../assets/icons/attach.svg";
import { ReactComponent as MicrophoneIcon } from "../assets/icons/microphone.svg";
import { ReactComponent as LockIcon } from "../assets/icons/lock.svg";
import Message from "../components/Message";
import MessageNotification from "../components/notification/MessageNotification";

function User() {
  return (
    <div className="s-userChat">
      <header className="s-userChat__header">
        <div className="s-userChat__header_avatar">
          <img src={getRandomImage(40, 40)} />
        </div>

        <div className="s-userChat__header_userInfo">
          <h3 className="s-userChat__header_userName u-text-overflow">
            Kahn Souphanousinphone
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
        <div className="s-userChat__body_content">
          <MessageNotification>21/01/2023</MessageNotification>
          <MessageNotification type="warning">
            <p>
              <LockIcon className="u-mr-1" />
              Messages are end-to-end encrypted. No one outside of this chat,
              not even WhatsApp, can read or listen to them. Click to learn
              more.
            </p>
          </MessageNotification>
          <Message seen>
            <p>
              Instead of enameling salty condensed milk with ginger, use one
              package hollandaise sauce and eight teaspoons cinnamon fine-mesh
              strainer.
            </p>
          </Message>

          <Message type="secondary">
            <p>
              Everyone loves the pepperiness of bagel paste rinsed with squeezed
              radish sprouts.
            </p>
          </Message>

          <Message>
            Tabasco soup is just not the same without flower and dark cored
            pumpkin seeds.
          </Message>
        </div>
      </div>

      <div className="s-userChat__footer">
        <button>
          <SmileyIcon width={22} height={22} />
        </button>

        <button>
          <AttachIcon width={22} height={22} />
        </button>

        <input className="e-input" placeholder="Type a message" />

        <button>
          <MicrophoneIcon width={22} height={22} />
        </button>
      </div>
    </div>
  );
}

export default User;
