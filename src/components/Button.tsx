interface Props {
  children: string; // children is supported by all componets
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  // From: https://getbootstrap.com/docs/6.0/components/button/
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
