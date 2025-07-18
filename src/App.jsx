import { REACT_CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Components");
  const handleTabSelection = (selectedTab) => () => {
    setSelectedTopic(selectedTab);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts of React</h2>
          <ul>
            {REACT_CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept
                key={index}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleTabSelection("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={handleTabSelection("JSX")}>JSX</TabButton>
            <TabButton onSelect={handleTabSelection("Props")}>Props</TabButton>
            <TabButton onSelect={handleTabSelection("State")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
