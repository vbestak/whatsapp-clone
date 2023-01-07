import MobileConnectionImg from "../assets/mobile-connection-light.jpg";

function MobileConnectionInfo() {
  return (
    <div className="s-mobileConnectionInfo">
      <div className="s-mobileConnectionInfo__img">
        <img src={MobileConnectionImg} />
      </div>

      <h3 className="s-mobileConnectionInfo__title">
        Keep your phone connected
      </h3>
      <p className="s-mobileConnectionInfo__info">
        WhatsApp connects to your phone to sync messages. To reduce data usage,
        connect your phone to Wi-Fi.
      </p>
    </div>
  );
}

export default MobileConnectionInfo;
