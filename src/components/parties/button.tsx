import type { ButtonProps } from "./type";
import { Link as RouterLink } from "react-router-dom";

export default function Button({ text, className, link }: ButtonProps) {
  const classes = `bg-[#F48C06] px-4 py-2 rounded-full cursor-pointer hover:scale-125 transition duration-700 ${className ?? ""}`;

  if (link) {
    // internal navigation
    return (
      <RouterLink to={link} className={classes}>
        {text}
      </RouterLink>
    );
  }

  return <button className={classes}>{text}</button>;
}