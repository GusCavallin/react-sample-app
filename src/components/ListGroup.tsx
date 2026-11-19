import type { MouseEvent } from "react";

function ListGroup() {
  // Sample List group borrowed from: https://getbootstrap.com/docs/6.0/components/list-group/  :)
  let items = [
    "Quilmes",
    "Buenos Aires",
    "Plano",
    "Chicago",
    "Riverside",
    "Ellicot City",
  ];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  const getMessage = () => {
    return items.length === 0 && <p>No items found.</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick} // Passing a reference to the function. Not calling it now.
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
