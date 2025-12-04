import { MdMenuOpen } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import type { MenuItem } from "../parties/type";
import Button from "../parties/button";

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "Careers", link: "/skills" },
  { name: "Bog", link: "/projects" },
  { name: "About Us", link: "/contact" },
];

function HeroSection() {
  return (
    <section className="flex bg-[#ebd5bc] items-center  lg:flex-row flex-col ">
      <div className="w-full flex-col gap-6  flex items-start p-16 ">
        <h1 className="md:text-7xl text-3xl font-bold text-[#2F327D]">
          <span className="text-[#F48C06]">Studying</span> Online is now much
          easier
        </h1>
        <p className="text-2xl ">
          Skilline is an interesting platform that will teach you in more an
          interactive way
        </p>
        <div className="flex items-center gap-10">
          <Button className="bg-[#F48C06] text-white" text="Join for free" />
          <div className="flex items-center">
            <FaRegPlayCircle className="text-5xl text-blue-500" />
            <Button
              className="bg-transparent text-black"
              text={`Watch how it works`}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full flex-col flex items-center justify-center">
        <img
          className="h-[700px] w-full object-contain"
          src="https://mhaecal.github.io/frontend/img/girl.png"
          alt=""
        />
          <img
            className="absolute top-12 left-0 animate-bounce"
            src="https://mhaecal.github.io/frontend/img/calendar.svg"
            alt=""
          />

          <img
            className="absolute w-50 bottom-12 left-0 animate-bounce"
            src="https://mhaecal.github.io/frontend/img/ux-class.svg"
            alt=""
          />
          <img
            className="absolute right-0  w-70 animate-bounce"
            src="https://mhaecal.github.io/frontend/img/congrat.svg"
            alt=""
          />
      </div>
    </section>
  );
}

export default function Header() {
  return (
    <div className="">
      <section className=" bg-[#ebd5bc]">
        <div className="flex container items-center justify-between py-8">
          <h1 className="text-3xl font-semibold">skill</h1>
          <div className="hidden lg:flex gap-8 items-center">
            <ul className="flex gap-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}> {item.name} </a>
                </li>
              ))}
            </ul>
            <Button className="bg-[#F48C06] text-white w-30" text="Login" />
            <Button
              className="border-2 bg-white text-[#F48C06] border-[#F48C06] w-30"
              text="Sign Up"
            />
          </div>
          <MdMenuOpen className="text-7xl lg:hidden block" />
        </div>
      </section>

      <HeroSection />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ebd5bc"
          fill-opacity="1"
          d="M0,192L40,202.7C80,213,160,235,240,224C320,213,400,171,480,176C560,181,640,235,720,234.7C800,235,880,181,960,160C1040,139,1120,149,1200,144C1280,139,1360,117,1400,106.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
