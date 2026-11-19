
// PascalCasing (used by React)
function Message() {
  // JSX: JavaScript XML -- Check: https://babeljs.io/repl
  // var name = 'Gustavo';
  // name ='';
  const name = 'Gustavo';
  if (name)
    return <h1>Hello {name}!</h1>;
  else
    return <h1>Hello World</h1>;
}

export default Message;