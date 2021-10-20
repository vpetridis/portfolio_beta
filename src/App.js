import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section sectionArea="music-container" title="music">
        I am a music composer
      </Section>
      <Section sectionArea="teach-container" title="teach">
        I am a former teacher
      </Section>
      <Section sectionArea="dev-container" title="dev">
        I am a front-end developer
      </Section>
    </div>
  );
}

export default App;
