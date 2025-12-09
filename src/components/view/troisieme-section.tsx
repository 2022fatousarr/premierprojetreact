import React from "react";
import TitleSection from "../parties/title";
import Button from "../parties/button";

export default function TroisiemeSection() {
  return (
    <div className="flex  flex-col md:flex-row items-start justify-between container gap-6">
      <div className="w-1/2">
        <TitleSection
          titre="Everything you can do in a physical classroom"
          sousTitre=" you can do with Skilline"
          description="Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system."
        />
        <Button
          text="Learn More"
          className="bg-transparent border-b-2 py-2 rounded-none text-gray-400"
        />
      </div>
      <img src="https://mhaecal.github.io/frontend/img/teacher-explaining.png" className="w-1/2 h-[400px] object-cover" alt="" />
    </div>
  );
}    