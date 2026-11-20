// Created with ES7+ pluging and "rafce" command

import type { ReactNode } from "react";

interface Props {
  children: ReactNode; // children is supported by all componets
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  // Borrowed from https://getbootstrap.com/docs/6.0/components/alert/
  return (
    <div className="alert alert-warning alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
