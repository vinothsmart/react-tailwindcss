const reactDesctiptions = [
  "React is a JavaScript library for building user interfaces.",
  "React allows developers to create large web applications that can change data, without reloading the page.",
  "React is maintained by Facebook and a community of individual developers and companies.",
];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const Header = () => {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDesctiptions[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
