import { getRandomImage } from "../util/img";

function ContactCard() {
  return (
    <div className="c-contact">
      <div className="c-contact__avatar u-shrink:0">
        <img src={getRandomImage()} />
      </div>
      <div className="c-contact__data">
        <div className="u-flex u-h-between">
          <div className="c-contact__data_name">Contact name</div>
          <div className="c-contact__data_time">09:21</div>
        </div>

        <div className="u-flex u-h-between">
          <div className="c-contact__data_message u-text-overflow">
            Last messageLast messageLast messageLast messageLast messageLast
          </div>

          <div>icons</div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
