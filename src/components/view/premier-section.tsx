// JSX runtime automatic — no React import required here
import TitleSection from "../parties/title";
import type { CardProps, TitleSectionProps } from "../parties/type";
import Card from "../parties/card";

import { ImFileZip } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { GrGroup } from "react-icons/gr";

const titre: TitleSectionProps = {
  titre: "All-In-One",
  sousTitre: "Cloud Software.",
  description:
    "Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.",
};

const Cards: CardProps[] = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    content:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts.",
    icon: <ImFileZip />,
    className:"bg-[#5B72EE]"
    
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    content:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    icon: <ImCalendar />,
    className:"bg-[#F48C06]",
  },
  {
    title: "Customer Tracking",
    content: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
    icon: <GrGroup />,
    className:"bg-[#29B9E7]",
  },
];

export default function PremierSection() {
  return (
    <div className="my-24 text-center px-4 space-y-12 container">
      <TitleSection
        titre={titre.titre}
        sousTitre={titre.sousTitre}
        description={titre.description}
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">
        {Cards.map((card, index) => (
          <Card

            key={index}
            title={card.title}
            content= {card.content}
            icon={card.icon}
            className={`w-15 h-15 flex items-center justify-center rounded-full text-4xl text-white ${card.className}`}

          />
        ))}
      </div>
    </div>
  );
}