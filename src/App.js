import "./App.css";
import Info from "./components/Info";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section sectionArea="music-container" title="music">
        <Info />
      </Section>
      <Section sectionArea="teach-container" title="teach">
        {" "}
        <Info />
      </Section>
      <Section sectionArea="dev-container" title="dev">
        {" "}
        <Info />
      </Section>
    </div>
  );
}

export default App;
