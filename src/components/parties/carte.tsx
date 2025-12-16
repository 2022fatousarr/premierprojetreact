import type { blogType } from "../parties/type";


export default function Carte({ src, title, description, tag, link }: blogType) {
  return (
    <a
      href={link}
      className="flex items-start gap-6 hover:shadow-lg p-3 rounded-md transition-shadow duration-150"
    >
      <div className="relative ">
        <img src={src} alt={title} className="object-cover w-[270px] h-[160px] rounded-lg" />
        <div className="bg-yellow-300 text-xs md:text-sm px-3 rounded-full absolute right-2 bottom-2">{tag}</div>
      </div>

      <div className="flex-1">
        <h3 className="text-[#1F2937] font-bold mb-2">{title}</h3>
        <p className="text-[#737A87]">{description}</p>
      </div>
    </a>
  );
}