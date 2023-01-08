import Sidebar from "../components/Sidebar";
import { PropsWithChildren } from "react";

function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div className="l-base">
      <div className="l-base__container l-container--fluid">
        <Sidebar />

        <div className="l-base__container_main">{children}</div>
      </div>
    </div>
  );
}

export default BaseLayout;
