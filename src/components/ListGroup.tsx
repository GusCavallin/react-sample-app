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
  items = [];

  const getMessage = () => {
    return items.length === 0 && <p>No items found.</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li> // Oops... we "forgot" className="list-group-item"
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
