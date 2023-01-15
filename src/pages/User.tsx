import { getRandomImage } from "../util/img";
import { ReactComponent as ElipsisIcon } from "../assets/icons/elipsis.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as SmileyIcon } from "../assets/icons/smiley.svg";
import { ReactComponent as AttachIcon } from "../assets/icons/attach.svg";
import { ReactComponent as MicrophoneIcon } from "../assets/icons/microphone.svg";

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

      <div className="s-userChat__body"></div>

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
