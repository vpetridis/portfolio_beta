import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section sectionArea="music-container" title="music"></Section>
      <Section sectionArea="teach-container" title="teach"></Section>
      <Section sectionArea="dev-container" title="dev"></Section>
    </div>
  );
}

export default App;
