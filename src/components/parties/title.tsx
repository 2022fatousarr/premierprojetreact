import React from "react";
import type { TitleSectionProps } from "./parties/type";

export default function TitleSection({
  titre,
  sousTitre,
  description,
}: TitleSectionProps) {
  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <h2 className="text-[#2F327D] text-4xl font-bold">
        {" "}
        {titre} <span className="text-amber-500">{sousTitre} </span>
      </h2>
      <p className="text-gray-400"> {description}</p>
    </div>
  );
}