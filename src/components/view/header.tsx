import { MdMenuOpen } from "react-icons/md";
import type { MenuItem } from "../parties/type";
import Button from "../parties/button";

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "Careers", link: "/skills" },
  { name: "Blog", link: "/projects" },
  { name: "About Us", link: "/contact" },
];


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
            <a href="login">
              <Button className="bg-[#F48C06] text-white w-30" text="Login" /> 
            </a>
          
          <a href="Sign Up">
             <Button
              className="border-2 bg-white text-[#F48C06] border-[#F48C06] w-30"text="Sign Up"/>
          </a>
            
          </div>
          <MdMenuOpen className="text-7xl lg:hidden block" />
        </div>
      </section>
    </div>
      )
}
