import { useState } from "react";
// Harnessing the power of props to allow for component reusability
// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}
// Below we deconstructed props => items, heading --- This allows us to use the
// items and heading objects without calling props each time. e.g. items.map or items.length etc. instead of props.items.map...
function ListGroup({ items, heading, onSelectItem }: Props) {
  // useState is an example of a Hook. Allows us to tap into built-in features in react.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] -->  variable (selectedIndex)
  // arr[1] --> updater function (setSelectedIndex)
  // This is the deconstruction of the array returned by useState()

  /* The ternary operator below can be used to reduce reduncancy. You can also see it takes up way less space. 
  if (items.length === 0) {
    return (
    <>
        <h1>
            List
        </h1>
        <p>No item found</p>
    </>
  )};
*/
  // The ternary operator can also be optimized with a logical and expression
  // which is subbed below. This is the method more often used by web developers
  // Replaces: {items.length === 0 ? <p>No item found</p> : null}

  // Handling events...
  // Event Handler
  // import { MouseEvent } from "react";    <-- This would live at the the top of the file if we were using
  // a custom handler function call. In this case on the event handler onClick.
  // const handleClick = (event: MouseEvent) => console.log(event);
  // onClick={handleClick}  <-- this would live inside a list element if we were using it.
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // Normally you want an id in something like a key value pair making the items a list of objects.
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
