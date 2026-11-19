import Alert from "./components/Alert";
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
    </div>
  );
}

export default App;
