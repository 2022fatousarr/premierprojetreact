import TitleSection from "../parties/title";
import Card from "../parties/card";
import type { CardProps } from "../parties/type";
import { ImWindows8 } from "react-icons/im";
import { ImLibreoffice } from "react-icons/im";
import { TiGroup } from "react-icons/ti";

const Cards: CardProps[] = [
  {
    content:
      "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    icon: <ImWindows8 />,
  },
  {
    content: "TA’s and presenters can be moved to the front of the class.",
    icon: <ImLibreoffice />,
  },
  {
    content: "Teachers can easily see all students and class data at one time.",
    icon: <TiGroup />,
  },
];

export default function QuatriemeSection() {
  return (
    <div className="container my-24">
      <TitleSection
        titre="A user interface"
        sousTitre="designed for the classroom"
        description=""
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {Cards.map((card, index) => (
          <Card key={index} content={card.content} icon={card.icon} />
        ))}
      </div>
    </div>
  );
}

