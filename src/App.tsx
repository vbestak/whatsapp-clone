import Home from "./pages/Home";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div>
      {/*<Home />*/}
      <div style={{ width: "80%" }}>
        <ContactCard pinned newMessages={3} />
        <ContactCard newMessages={55} />
        <ContactCard seen />
        <ContactCard />
        <ContactCard notSeen />
        <ContactCard />
      </div>
    </div>
  );
}

export default App;
