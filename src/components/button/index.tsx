import type { ReactNode } from "react";
import "./button.css";

export interface ButtonProps {
  children: ReactNode;
  variant?: "light" | "dark";
}

const Button = ({ variant, children }: ButtonProps) => {
  return <button className={`button ${variant ?? "light"}`}>{children}</button>;
};

export default Button;
