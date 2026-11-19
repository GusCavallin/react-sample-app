import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Quilmes",
    "Buenos Aires",
    "Plano",
    "Chicago",
    "Riverside",
    "Ellicot City",
  ];

  return (
    <div>
      <ListGroup items={items} heading="My List" />
    </div>
  );
}

export default App;
