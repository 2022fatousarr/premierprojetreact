import React from 'react'
import Button from '../parties/button';
import Carte from '../parties/carte';

import type { blogType } from "../parties/type";


const blog: blogType[] = [
  {
    id: 1,
    src: "https://mhaecal.github.io/frontend/img/laptop-news.png",
    title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    description: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    tag: "latyr release",
    link: "/detail",
  },

  {
    id: 2,
    src: "https://mhaecal.github.io/frontend/img/children-laptop.png",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,...",
    tag: "Press release",
    link: "/detail",
  },
  {
    id: 3,
    src: "https://mhaecal.github.io/frontend/img/girl-laptop.png",
    title:"Zoom’s earliest investors are betting millions on a better Zoom for schools",
    description: "Zoom was never created to be a consumer product. Nonetheless, the...",
    tag: "News",
    link: "/detail",
  },
  {
    id: 4,
    src: "https://mhaecal.github.io/frontend/img/cat-laptop.png",
    title:"Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    description: "This year, investors have reaped big financial returns from betting on Zoom...",
    tag: "News",
    link: "/detail",
  },]

export default function News() {
  return (
    
    <section className="container justify-between ">

      <div className=" space-y-5 mt-20 mb-16 flex items-center flex-col justify-center animate-fade-up">
        <h2 className="text-4xl text-[#2F327D] text-center">
          Latest News and Resources
        </h2>
        <p className="text-[#7A808D] text-center">
          See the developments that have occurred to Skillines in the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <img src={blog[0].src} alt={blog[0].title} className="object-cover rounded-3xl h-[300px] w-full" />
          <div className="bg-[#FCD34D] w-fit text-[#2F327D] rounded-full px-4 font-bold">
           {blog[0].tag}
          </div>
          <div className=" w-4/5">
            <h2 className="text-[#1F2937] text-xl font-bold">
              {blog[0].title}
            </h2>
            <p className="text-[#7A808D] line-clamp-3">
              {blog[0].description}
            </p>
          </div>
          <Button 
            link="/detail"
            className="border-b cursor-pointer text-[#374151]"
            text="Read more"
          />
        </div>

        <div className="">
          {
            blog.slice(1, 4).map((item) => (
              
              <Carte
                src={item.src}
                tag={item.tag}
                title={item.title}
                description={item.description}
                id={item.id}
                link={item.link}
              />
          ))}
          
        </div>
      </div>
    </section>
  );
    
}