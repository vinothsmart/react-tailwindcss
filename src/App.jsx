import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDesctiptions = [
  "React is a JavaScript library for building user interfaces.",
  "React allows developers to create large web applications that can change data, without reloading the page.",
  "React is maintained by Facebook and a community of individual developers and companies.",
];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const Header = () => {
  const description = reactDesctiptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

const CoreConcept = ({ title, description, image }) => {
  return (
    <li>
      <img src={image} alt={title} className="w-16 h-16" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts of React</h2>
          <ul>
            <CoreConcept
              title="React Components"
              description="Components are the building blocks of a React application."
              image={componentsImg}
            />
            <CoreConcept
              title="JSX"
              description="JSX is a syntax extension that allows mixing HTML with JavaScript."
              image={componentsImg}
            />
            <CoreConcept
              title="State and Props"
              description="State is managed within the component, while props are passed to components."
              image={componentsImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
