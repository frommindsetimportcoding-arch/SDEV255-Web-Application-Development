import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  // the ? makes it optional to include
  // Setting string literals allows typescript linting to catch inappropriate entries.
  color?: "primary" | "warning" | "danger";
  onClick: () => void;
}
// And here we set the default color to primary when it is not explicitly defined.
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color + " m-1"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
