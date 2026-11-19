import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  return (
    <div>
      <Message />
      <hr />
      <ListGroup
        items={["One", "Two", "Three"]}
        heading="Simple list"
        onSelectItem={(item) => {
          console.log(item);
        }}
      />
      <hr />
      <Alert>
        <b>
          <i>Good bye!</i>
        </b>
      </Alert>
      <hr />
      <Button name="Click me!" />
    </div>
  );
}

export default App;
