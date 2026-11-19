// Created with ES7+ pluging and "rafce" command

interface Props {
  children: string; // Supported by all componets
}

const Alert = ({ children }: Props) => {
  // Borrowed from https://getbootstrap.com/docs/6.0/components/alert/
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
