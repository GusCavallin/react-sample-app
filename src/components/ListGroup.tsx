function ListGroup() {
  // Sample List group borrowed from: https://getbootstrap.com/docs/6.0/components/list-group/  :)
  const items = [
    "Quilmes",
    "Buenos Aires",
    "Plano",
    "Chicago",
    "Riverside",
    "Ellicot City",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li> // Oops... we "forgot" className="list-group-item"
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
