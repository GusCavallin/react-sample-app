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

  const getMessage = () => {
    return items.length === 0 && <p>No items found.</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item + " clicked!")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
