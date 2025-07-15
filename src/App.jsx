import { REACT_CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const handleTabSelection = useCallback(() => {
    console.log("Tab button clicked");
  }, []);
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
            <TabButton onSelect={handleTabSelection}>Components</TabButton>
            <TabButton onSelect={handleTabSelection}>JSX</TabButton>
            <TabButton onSelect={handleTabSelection}>Props</TabButton>
            <TabButton onSelect={handleTabSelection}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
