import Home from "./pages/Home";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div>
      {/*<Home />*/}
      <div style={{ width: "40%" }}>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
}

export default App;
