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

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="My Cities List"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
