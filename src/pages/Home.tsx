import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="p-home">
      <div className="p-home__main l-container--fluid">
        <Sidebar />

        <div className="p-home__main_chat">TODO</div>
      </div>
    </div>
  );
}

export default Home;
