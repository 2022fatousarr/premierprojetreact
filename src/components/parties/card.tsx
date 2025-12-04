import type { CardProps } from "./type";

export default function Card({ title, content, icon, className }: CardProps) {
  return (
    <div className="shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
      <div className={`w-20 h-20 flex items-center justify-center rounded-full text-4xl text-white ${className ?? 'bg-purple-700'}`}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}