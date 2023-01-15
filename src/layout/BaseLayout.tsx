import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div className="l-base">
      <div className="l-base__container l-container--fluid">
        <Sidebar />

        <main className="l-base__container_main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default BaseLayout;
