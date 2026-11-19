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
      <Button
        color="success"
        onClick={() => {
          console.log("clicked");
        }}
      >
        I'm a button... Click me!
      </Button>
    </div>
  );
}

export default App;
