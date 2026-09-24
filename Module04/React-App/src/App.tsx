import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisable, setAlertVisibility] = useState(false);
  let items = ["New York", "San Fancisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibility(false)}>
          An Alert that is hopefully attached to a Button.
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <b>World</b>
      </Alert>
      <Button onClick={() => console.log("Clicked")}>MyButton</Button>
      <Button color="warning" onClick={() => console.log("Clicked Another")}>
        A Second Button
      </Button>
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Display Alert
      </Button>
    </div>
  );
}

export default App;
