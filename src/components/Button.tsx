interface Props {
  name: string;
}

const Button = ({ name }: Props) => {
  // From: https://getbootstrap.com/docs/6.0/components/button/
  return (
    <button type="button" className="btn btn-primary">
      {name}
    </button>
  );
};

export default Button;
