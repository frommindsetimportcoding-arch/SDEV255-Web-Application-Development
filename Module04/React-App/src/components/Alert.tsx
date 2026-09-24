import { ReactNode } from "react";

interface Props {
  // Using ReactNode instead of string types allows us to use more complex HTML structures.
  children: ReactNode;
  onClose?: () => void;
}
// Don't forget we are deconstructing the props object. Right now, just { text }
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
