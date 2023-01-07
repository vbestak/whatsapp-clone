import Sidebar from "../components/Sidebar";
import MobileConnectionInfo from "../components/MobileConnectionInfo";

function Home() {
  return (
    <div className="p-home">
      <div className="p-home__main l-container--fluid">
        <Sidebar />

        <div className="p-home__main_chat">
          <MobileConnectionInfo />
        </div>
      </div>
    </div>
  );
}

export default Home;
