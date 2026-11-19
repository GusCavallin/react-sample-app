interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  // From: https://getbootstrap.com/docs/6.0/components/button/
  return (
    <button type="button" className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
