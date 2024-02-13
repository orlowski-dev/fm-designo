import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import "./button.css";

export interface ButtonProps {
  children: ReactNode;
  variant?: "light" | "dark";
}

export const Button = ({
  variant,
  children,
  ...other
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`button ${variant ?? "light"}`} {...other}>
      {children}
    </button>
  );
};

export const LinkButton = ({
  variant,
  children,
  ...other
}: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={`button ${variant ?? "light"}`} {...other}>
      {children}
    </a>
  );
};
