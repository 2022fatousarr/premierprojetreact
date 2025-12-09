import type { ButtonProps } from "./type";

export default function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={`bg-[#F48C06] px-4 py-2 rounded-full cursor-pointer hover:scale-125 transition duration-700 ${className}`}
    >
      <a href="{link}"> {text}</a>
      
    </button>
  );
}