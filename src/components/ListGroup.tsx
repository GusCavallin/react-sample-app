import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // Sample List group borrowed from: https://getbootstrap.com/docs/6.0/components/list-group/  :)

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState('');  // A name varaible example, initialized with ''

  const getMessage = () => {
    return items.length === 0 && <p>No items found.</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active" // "active" is the "selected" style
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
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
