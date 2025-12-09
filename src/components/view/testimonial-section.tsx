import React from 'react'
import TitleSection from "../parties/title";
import Button from "../parties/button";
import Temoignages from '../parties/temoignages';




export default function TestimonialSection() {
  return (
    <div className='container space-y-4'>
           <div className="w-1/2">
              <TitleSection
                titre="What They Say?"
                sousTitre=""
                description="Skilline has got more than 100k positive ratings from our users around the world.
                             Some of the students and teachers were greatly helped by the Skilline.
                             Are you too? Please give your assessment"
              />
              <Button
                text="Write your assessment"
                className="bg-transparent border-2 py-2 rounded text-amber-500  mt-16 "
              />
              
            </div>
            <Temoignages/>
    </div>
  )
}
